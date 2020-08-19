import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const ProductForm = (props) => {
  const { isVisible, setIsVisible } = props;

  const {
    createProduct,
    editProduct,
    updateProduct,
  } = useContext(ProductContext);

  const initialProducttate = {
    _id: null,
    nombre: "",
    descripcion: "",
    precio : null,
    cantidad: null,
  };

  const [productData, setProductData] = useState(initialProducttate);

  useEffect(() => {
    if (editProduct) setProductData(editProduct);
  }, [editProduct]);

  const updateField = (data, field) => {
    setProductData({
      ...productData,
      [field]: data,
    });

    console.log(productData);
  };

  const saveProduct = () => {
    if (!editProduct) {
      createProduct(productData);
    } else {
      updateProduct(productData);
    }
    setProductData(initialProducttate);
    setIsVisible(false);
  };

  const dialogFooter = (
    <div className="ui-dialog-buttonpane p-clearfix">
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </div>
  );

  const clearSelected = () => {
    setIsVisible(false);
    setProductData(initialProducttate);
  };

  return (
    <div>
      <Dialog
        visible={isVisible}
        modal={true}
        style={{ width: "420px" }}
        contentStyle={{ maxHeight: "500px" }}
        header="Detalles del Product"
        onHide={() => clearSelected()}
        footer={dialogFooter}
      >
        <div className="p-grid p-fluid">
          <br />
          <div className="p-float-label">
            <InputText
              value={productData.nombre}
              onChange={(e) => updateField(e.target.value, "nombre")}
            />
            <label>Nombre:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={productData.descripcion}
              onChange={(e) => updateField(e.target.value, "descripcion")}
            />
            <label>Nombre:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={productData.precio}
              onChange={(e) => updateField(e.target.value, "precio")}
            />
            <label>Precio:</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={productData.cantidad}
              onChange={(e) => updateField(e.target.value, "cantidad")}
            />
            <label>Cantidad:</label>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductForm;
