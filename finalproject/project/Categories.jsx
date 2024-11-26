// import React from 'react'
// import HomePage from './HomePage'
// import { Link,useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// // const navigate=useNavigate();
// function Categories() {

//   const [editedCategoryId, setEditedCategoryId] = useState(null); // לשמור איזו קטגוריה במצב עריכה
//   const [newCategoryName, setNewCategoryName] = useState(''); 

//   const [Categories,setCategories]=useState([
//           {id:1,name:'clothing'},
//           {id:2,name:'toys'},
//           {id:3,name:'shoes'},
//           {id:4,name:'electronic'},
//           {id:5,name:'home styling'}
//   ])

//     // פונקציה לעדכון שם קטגוריה
//     const ShowDetails = (id) => {
//       if (editedCategoryId === id) {
//         setEditedCategoryId((prevCategory) => {
//           return prevCategory.map((category) => {
//             if (category.id === id) {
//               // אם הקטגוריה הזו היא זו שנמצאת במצב עריכה, עדכן את השם
//               return { ...category, name: newCategoryName }; 
//             }
//             return category; // אם לא, שמור על הקטגוריה כפי שהיא
//           });
//         });
//       }
//     };
// //פונקציה למחיקת שם הקטגוריה
//     const deleteCategory = (id) => {
//       setCategories((prevCategories) => {
//         return prevCategories.filter((category) => category.id !== id);
//       });
//     };
 
//   return (
//     <div>
//      <div>Categories</div>
//       {Categories.map((category) => (
//         <div key={category.id} style={{ border: '2px solid' }}>
//           <span>{category.name}</span>
//           <button onClick={() => ShowDetails(category.id)} style={{ fontSize: '10px' }}>Update</button>
//           <button onClick={() => deleteCategory(category.id)} style={{ fontSize: '10px' }}>Remove</button>
//         </div>
//       ))}
//     <input type='text'></input>
//     <Link to='/HomePage' style={{border:'2px black'}}>home page</Link>
//         </div>

//   )
// }

// export default Categories



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'clothing' },
    { id: 2, name: 'electronics' },
    { id: 3, name: 'toys' },
    { id: 4, name: 'shoes' },
    { id: 5, name: 'home styling' }
  ]);
  const [editedCategoryId, setEditedCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [NewCategory, setNewCategory] = useState('');

  const ShowDetails = (id) => {
    if (editedCategoryId === id) {
      // Save the new name and exit edit mode
      setCategories((prevCategories) => {
        return prevCategories.map((category) => {
          if (category.id === id) {
            return { ...category, name: newCategoryName };
          }
          return category;
        });
      });
      setEditedCategoryId(null);
      setNewCategoryName('');
    } else {
      // Enter edit mode
      setEditedCategoryId(id);
      const category = categories.find((category) => category.id === id);
      setNewCategoryName(category.name);
    }
  };

  const handleNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const deleteCategory = (id) => {
    setCategories((prevCategories) => {
      return prevCategories.filter((category) => category.id !== id);
    });
  };


  const Adddcategory=(name)=>{
    setCategories((prevCategories) => {
      return [...prevCategories,{id:prevCategories.length+1,name:name}];
    });
  }
  return (
    <div>
  <span className="words">Hello {sessionStorage.name} {sessionStorage.lastname}</span>
     <div className="Nav">
        <Link to='Products' >Products</Link> <br />
        <Link to='Customers'href="#">Customers</Link> <br />
        <Link to='Statistics' href="#">Statistics</Link> <br />
       </div>


      <div>Categories</div>
      {categories.map((category) => (
        <div key={category.id} style={{ border: '2px solid' }}>
          {editedCategoryId === category.id ? (
            <div>
              <input
                type="text"
                value={newCategoryName}
                onChange={handleNameChange}
                placeholder="Enter new name"
              />
              <button onClick={() => ShowDetails(category.id)} style={{ fontSize: '10px' }}>Save</button>
            </div>
          ) : (
            <span>{category.name}</span>
          )}
          <button onClick={() => ShowDetails(category.id)} style={{ fontSize: '10px' }}>
            {editedCategoryId === category.id ? 'Save' : 'Update'}
          </button>
          <button onClick={() => deleteCategory(category.id)} style={{ fontSize: '10px' }}>Remove</button>
        </div>
      ))}
      <br />
      
        new category name: <input type='text' onChange={(e)=>setNewCategory(e.target.value)}></input>
      <button onClick={()=>Adddcategory(NewCategory)}>Add</button><br />
      <Link to='/HomePage' style={{ border: '2px black' }}>home page</Link>
    </div>
  );
};

export default Categories;