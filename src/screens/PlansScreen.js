import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import db from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const get = async () => {
      // <= create async function
      const q = query(collection(db, "products"), where("active", "==", true));
      const querySnapshot = await getDocs(q);

      let data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        data.push({ id: doc.id, product: doc.data() });
      });
      setProducts(data);
    };

    get(); // <= call function
  }, []);

  //   console.log(products);
  const loadCheckout = async (priceId) => {
    const dockRef = query(db, "customers", user?.id, "checkout_sessions");
    addDoc(dockRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
    onSnapshot(dockRef, async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`An error occured:${error.message}`);
      }
      if (sessionId) {
        // init stripe
        const stripe = await loadStripe(
          "pk_test_51NX4ROSJbauHjVAZ9GfeBtU08H59OhuYfYGB6gzO7NP10bbtIcgeXYg8KMzcPriqs8B49k1AjpnAsmrhlMgQaf7Q00m26s5mAP"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });

    // const docRef = await db
    //   .collection("customers")
    //   .doc(user.uid)
    //   .collection("checkout_sessions")
    //   .add({
    //     price: priceId,
    //     success_url: window.location.origin,
    //     cancel_url: window.location.origin,
    //   });
    // docRef.onSnapshot(async (snap) => {
    //   const { error, sessionId } = snap.data();
    //   if (error) {
    //     alert(`An error occured:${error.message}`);
    //   }
    //   if (sessionId) {
    //     // init stripe
    //     const stripe = await loadStripe(
    //       "pk_test_51NX4ROSJbauHjVAZ9GfeBtU08H59OhuYfYGB6gzO7NP10bbtIcgeXYg8KMzcPriqs8B49k1AjpnAsmrhlMgQaf7Q00m26s5mAP"
    //     );
    //     stripe.redirectToCheckout({ sessionId });
    //   }
    // });
  };
  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        //console.log(productData.product.description);
        return (
          <div className="plansScreen__plan">
            <div className="plansScreen__info">
              <h5>{productData.product.name}</h5>
              <h6>{productData.product.description}</h6>
            </div>
            <button
              onClick={() => loadCheckout(productData.product?.prices?.priceId)}
              className="plansScreen__subscribe"
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
