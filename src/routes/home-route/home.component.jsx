import DirectoryItem from "../../components/directory-item/directory-item.component";
export default function Home(){
    const categories = [
      {
        id: 1,
        title: 'Hats',
      },
      {
        id: 2,
        title: 'Jackets',
      },
      {
        id: 3,
        title: 'Sneakers',
      },
      {
        id: 4,
        title: 'Womens',
      },
      {
        id: 5,
        title: 'Mens',
      },
    ];
  
    return (
      <DirectoryItem categories={categories} />
    );
  };