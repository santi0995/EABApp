import { Avatar, ListItem } from "react-native-elements"
import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { ScrollView } from "react-native";
import db from "../../constants/firebase/firebase";
import { styles } from "./styles";

const Product = ({ navigation }) => {
  const [traspasos, setTraspasos] = useState([]);
  
  useEffect(() => {
    db.collection("Traspasos").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { tienda, articulo, cantidad } = doc.data();
        users.push({
          id: doc.id,
          tienda,
          articulo,
          cantidad,
        });
      });
      setTraspasos(users);
    });
  }, []);

    return (
      <ScrollView>
        {
          traspasos.map((traspaso) => {
            return (
              <ListItem 
                key={traspaso.id}
              >
                <ListItem.Chevron />
                <ListItem.Content>
                  <ListItem.Title>{traspaso.tienda}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )
          })
        }
      </ScrollView>
    );
  }

export default Product;

// import { FlatList, SafeAreaView } from "react-native";
// import React, { useEffect } from "react";
// import { filterProducts, selectProduct } from "../../store/actions";
// import { useDispatch, useSelector } from "react-redux";

// import ProductItem from "../../components/product-item";
// import { styles } from "./styles";

// const Product = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const category = useSelector((state) => state.category.selected);
//   const filteredProducts = useSelector((state) => state.products.filteredProducts);

//   const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
//   const onSelected = (item) => {
//     dispatch(selectProduct(item.id));
//     navigation.navigate("ProductDetail", {
//       title: item.title,
//     });
//   };
//   const keyExtractor = (item) => item.id.toString();
//   useEffect(() => {
//     dispatch(filterProducts(category.id));
//   }, []);
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={filteredProducts}
//         renderItem={renderItem}
//         keyExtractor={keyExtractor}
//         style={styles.contentList}
//       />
//     </SafeAreaView>
//   );
// };

// export default Product;
