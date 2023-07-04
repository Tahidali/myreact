import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
// import NorthWestIcon from "@mui/icons-material/NorthWest";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddProductModel from "../Component/AddProductModel";
import EditProductModel from "../Component/EditProductModel";
import {DeleteProduct,EmptyError,getProduct2list,searchProduct,} from "../Redux/Product2Slice";

function Product2() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [Editopen, setEditOpen] = useState(false);
  const [EditValue, setEditValue] = useState({});
  const [SearchValue, setSearchValue] = useState("");
  const { loading, Product2list, filterProductList } = useSelector(
    (state) => state.Product2Sl
  );

  useEffect(() => {
    dispatch(getProduct2list());
  },[]);

  //  search value
  useEffect(()=>{
    dispatch(searchProduct(SearchValue))
  },[SearchValue]);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const HandleEditOpen = (values) => {
    setEditValue(values);
    setEditOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(EmptyError());
  };
  const EditHandleClose = () => {
    setEditOpen(false);
  };
  

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border " role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container py-4">
      {/* ================= Model =================== */}
      <AddProductModel open={open} handleClose={handleClose} />

      {/* ================= Edit-Model =================== */}
      <EditProductModel
        Editopen={Editopen}
        EditHandleClose={EditHandleClose}
        EditValue={EditValue}
      />
      <div className="ms-5 py-3 d-flex justify-content-center align-items-center">
        <div className="Search w-100">
          <input
            type="text"
            placeholder="Search...."
            onChange={(e) => setSearchValue(e.target.value)}
            className="form-control "
            value={SearchValue}
          />
        </div>
        <div className="w-25">
          <Button variant="contained" onClick={handleClickOpen}>
            Add Product
          </Button>
          {/* <p className='text-secondary'>Add Item click here <NorthWestIcon color="light"fontSize='extra-small' /> </p> */}
          {/* <button className='btn btn-primary'>Add Product</button> */}
        </div>
      </div>

      <div className="p-4 border border-1 rounded-3 shadow">
        <table className="table ">
          <thead>
            <tr className="border bg-light">
              <th>Sr no:</th>
              <th>Name:</th>
              <th>Category</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterProductList &&
              filterProductList.map((item, index) => {
                const { _id, name, price, category, qty } = item;
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{category}</td>
                    <td>{qty}</td>
                    <td>
                      {/* <td><button className='btn btn-danger me-1'>Delete</button> */}
                      <DeleteIcon
                        className="me-3 text-danger"
                        onClick={() => dispatch(DeleteProduct({ id: _id }))}
                      />
                      <EditIcon
                        className="me-3 text-primary"
                        onClick={() => HandleEditOpen(item)}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product2;
