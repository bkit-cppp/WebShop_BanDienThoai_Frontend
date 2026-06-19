import { useEffect, useState } from "react";
interface Props{
    selectedDisCountCode:any;
    onSubmit: (data: any) => void;
}
export default function DiscountcodeForm({
 selectedDisCountCode,
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    discountcodeId: "",
    code: "",
    discountPercent: "",
    discountAmount:"",
    StartDate:"",
    EndDate:"",
    IsActive:""
  });

  useEffect(() => {
    if (selectedDisCountCode) {
      setForm({
        discountcodeId:selectedDisCountCode.discountcodeId,
        code:selectedDisCountCode.code,
        discountPercent:selectedDisCountCode.discountPercent,
        discountAmount:selectedDisCountCode.discountAmount,
        StartDate:selectedDisCountCode.StartDate,
        EndDate:selectedDisCountCode.EndDate,
        IsActive:selectedDisCountCode.IsActive
        
      });
    }
  }, [selectedDisCountCode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);

    setForm({
      discountcodeId: "",
      code: "",
      discountAmount: "",
      discountPercent:"",
      StartDate:"",
      EndDate:"",
      IsActive:"",
    });
  };

  return (
    <form className="discountcode-form" onSubmit={submit}>
      <h2>
        {form.discountcodeId
          ? "Update DiscountCode"
          : "Create DiscountCode"}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Code"
        value={form.code}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="discountAmount"
        placeholder="discountAmount"
        value={form.discountAmount}
        onChange={handleChange}
        required
      />
     
      <button type="submit">
        {form.discountcodeId ? "Update" : "Create"}
      </button>
    </form>
  );
}