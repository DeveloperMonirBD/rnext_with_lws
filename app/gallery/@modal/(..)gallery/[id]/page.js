import Image from 'next/image';
import Modal from '@/app/components/Modal';
import photos from '@/app/gallery/images';

export default function PhotoPage({ params }) {
    const { id } = params;
    const photo = photos.find(p => p.id === id);

    if (!photo) {
        return <div className="container mx-auto p-4">Photo not found</div>;
    }
    return (
        <Modal>
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
                </div>
                <Image alt={photo.name} src={photo.src} className="w-full object-cover aspect-square" />
            </div>
            
       </Modal>
    );
}
