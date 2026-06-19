import { useEffect, useState } from "react";

interface Props {
  selectedProduct: any;
   categories: any[];
  onSubmit: (data: any) => void;
}

export default function ProductForm({
  selectedProduct,
  categories,
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    productId: "00000000-0000-0000-0000-000000000000",
    name: "",
    description: "",
    price: 0,
    pictureUrl: "",
    type: "",
    brand: "",
    quantityStock: 0,
    categoryId: "00000000-0000-0000-0000-000000000000",
  });

  useEffect(() => {
    if (selectedProduct) {
      setForm({
        productId: selectedProduct.productId,
        name: selectedProduct.productName,
        description:
          selectedProduct.productDescription,
        price: selectedProduct.price,
        pictureUrl:
          selectedProduct.pictureUrl || "",
        type: selectedProduct.type,
        brand: selectedProduct.brand,
        quantityStock:
          selectedProduct.quantityStock,
          categoryId:selectedProduct.categoryId
      });
    }
  }, [selectedProduct]);
 const[imageFile, setImageFile]=useState<File |null>(null);
const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement
  >
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

  const submit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSubmit({...form,
      imageFile:imageFile
    });

    setForm({
      productId: "00000000-0000-0000-0000-000000000000",
      name: "",
      description: "",
      price: 0,
      pictureUrl: "",
      type: "",
      brand: "",
      quantityStock: 0,
      categoryId: "00000000-0000-0000-0000-000000000000"
    });
    setImageFile(null);
  };
 
  return (
    <form className="category-form" onSubmit={submit} >
      <h2>
       {form.productId? "Update" : "Create"}
      </h2>
      <input type="text" name="name" placeholder="Tên sản phẩm" value={form.name} onChange={handleChange} required 
      />
      <input type="text" name="description" placeholder="Mô tả" value={form.description} onChange={handleChange} required/>
 
      <input type="number" name="price" placeholder="Price" value={form.price}  onChange={handleChange}  required />

      {/* <input type="text" name="pictureUrl" placeholder="Picture URL"  value={form.pictureUrl}  onChange={handleChange} /> */}

      <input  type="text" name="type" placeholder="Type" value={form.type}  onChange={handleChange} />

      <input type="text" name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} />

      <input type="number"  name="quantityStock"  placeholder="Quantity Stock"  value={form.quantityStock} onChange={handleChange} />
      <input type="file" accept="image/*" onChange={(e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  }}
/>
<div className="selected-custom-wrapper">
      <select className="selected-custom" name="categoryId" value={form.categoryId} onChange={handleChange} required>
        <option value="00000000-0000-0000-0000-000000000000">
          Select Category
        </option>

        {categories.map((item) => (
          <option
            key={item.categoryId}
            value={item.categoryId}
          >
            {item.name}
          </option>
        ))}
      </select>
</div>

      <button type="submit">
          {form.productId
          ? "Update"
          : "Create"}
      </button>
    </form>
  );
}