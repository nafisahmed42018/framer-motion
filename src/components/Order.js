import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Order = ({ pizza }) => {
  const containerVariant = {
    hidden: {
      opacity: 0,
      y: "-100vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        // osciallation of the spring
        damping: 10,
        //transition orchastration
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  // hidden and visible gets propagated to it's child elements
  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: "-100vw" }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <div>
        {pizza.toppings.map((topping) => (
          <motion.div variants={childVariant} key={topping}>
            {topping}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Order;
