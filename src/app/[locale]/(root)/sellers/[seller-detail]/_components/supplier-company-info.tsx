import { CompanyMapEmbed } from "@/components/shared/company-map-embed";
import { Supplier } from "@/types/product.type";

type Props = {
  supplier: Supplier;
};

const SupplierCompanyInfo = ({ supplier }: Props) => {
  return (
    <div className="space-y-4">
      <p>{supplier.description}</p>
      <CompanyMapEmbed query={supplier.locationText} />
    </div>
  );
};

export default SupplierCompanyInfo;
