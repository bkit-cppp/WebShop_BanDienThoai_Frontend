import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  categories: any[];
  onDelete: (id: string) => void;
  onEdit: (category: any) => void;
}

export default function CategoryTable({
  categories,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="table-wrapper">
      <table className="category-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((item) => (
            <tr key={item.categoryid}>
              <td>{item.name}</td>

              <td>{item.description}</td>

              <td className="actions">
                <button
                  className="edit-btn"
                  onClick={() => onEdit(item)}
                >
                  <FaEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    onDelete(item.categoryId)
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