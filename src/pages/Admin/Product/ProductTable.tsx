import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

interface Props {
  products: any[];
  onDelete: (id: string) => void;
  onEdit: (product: any) => void;
}

export default function ProductTable({
  products,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="table-wrapper">
      <table className="category-table">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.productId}>
              <td>
                {item.pictureUrl?(
                  <img src={item.pictureUrl} alt={item.productName}
                  className="product-table-image"/>
                ):(<span className="no-image">Không có hình ảnh</span>)}
              </td>
              <td>{item.productName}</td>
              <td>{item.productDescription}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.type}</td>
              <td>{item.quantityStock}</td>
               <td>{item.categoryName}</td>
              <td className="actions">
                <button
                  className="edit-btn"
                  onClick={() =>
                    onEdit(item)
                  }
                >
                  <FaEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    onDelete(
                      item.productId
                    )
                  }
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}