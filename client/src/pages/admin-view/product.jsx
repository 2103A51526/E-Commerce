import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { use, Fragment } from "react";
import { useState } from "react";


const initialFormData = {
  image:null,
  title: '',
  decription: '',
  category: '',
  brand: '',
  price: '',
  salePrice: '',
  totalStock: ''
}

function AdminProduct() {
  const [OpenCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData)
  const [imageFile, setImageFile] = useState(null);
  const[uploadedImageUrl,setUploadedImageUrl] = useState('')

  function onSubmit(){

  }

  return (
    <Fragment>
      <div className="mb-5 flex w-full justify-end">
        <Sheet open={OpenCreateProductsDialog} onOpenChange={setOpenCreateProductsDialog}>
          <SheetTrigger asChild>
            <Button onClick={() => setOpenCreateProductsDialog(true)}>Add New Products</Button>
          </SheetTrigger>
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Add New Products</SheetTitle>
            </SheetHeader>
            <ProductImageUpload file={imageFile} setFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl} />
            <div className="py-6">
              <CommonForm onSubmit={onSubmit} formData={formData} setFormData={setFormData} buttonText={'Add'}
              formControls={addProductFormElements}
              />

            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
    </Fragment>
  );
}

export default AdminProduct;
