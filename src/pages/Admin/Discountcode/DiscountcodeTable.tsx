import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  discountcodes: any[];
  onDelete: (id: string) => void;
  onEdit: (discountcode: any) => void;
}

export default function DiscountcodeTable({
  discountcodes,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="table-wrapper">
      <table className="category-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>DiscountPercent</th>
            <th>DiscountAmount</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {discountcodes.map((item) => (
            <tr key={item.discountcodeId}>
              <td>{item.Code}</td>
              <td>{item.DiscountPercent}</td>
              <td>{item.DiscountAmount}</td>
              <td>{item.StartDate}</td>
              <td>{item.EndDate}</td>
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
                    onDelete(item.discountcodeId)
                  }
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ),null)}
        </tbody>
      </table>
    </div>
  );
}