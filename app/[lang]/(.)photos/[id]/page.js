import Modal from "@/components/modal";
import PhotoDetails from "@/components/PhotoDetails";


export default async function DetailPages({params}){
    const {id, lang} = await params;
    return (
        <Modal>
        <PhotoDetails id={id} lang={lang} />
        </Modal>
    );
}