import React from 'react';
import { createContext } from 'react';
import { LinksData } from './linksdata';
import { socialData } from './socialData';
import { items } from './productData';
import { toast } from 'react-toastify';

const productsContext = createContext();

class ProductsContext extends React.Component {
  state = {
    sideCartOpen: false,
    cartItems: 0,
    links: LinksData,
    socialLinks: socialData,
    cart: [],
    cartTatal: 0,
    cartSubTotal: 0,
    cartTax: 0,
    numberGrid: 4,
    lodaing: true,
    dropdown: false,
    wishlist: [],
    singleProduct: {},
    storeProducts: [],
    featuredProducts: [],
    filterdProducts: [],
    search: '',
    price: 0,
    max: 0,
    main: 0,
    company: 'all',
    shipping: false,
    detailsOpen: false,
    nameGrid: 'three',
    relatedProduct: [],
  };
  componentDidMount() {
    this.setProducts(items);
    console.log(this.getLocalStorageTotal());
  }

  setProducts = (products) => {
    const newProduct = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image, count: 1 };
      return product;
    });
    const featuredProducts = newProduct.filter(
      (item) => item.featured === true
    );
    const maxPrice = Math.max(...newProduct.map((item) => item.price));
    this.setState({
      storeProducts: newProduct,
      featuredProducts: featuredProducts,
      filterdProducts: newProduct,
      cart: this.getStorageCart(),
      relatedProduct: this.getStorageRelatedProducts(),
      wishlist: this.getStorageWishList(),
      singleProduct: this.getStorageSingle(),
      lodaing: false,
      price: maxPrice,
      max: maxPrice,
      cartItems: this.getLocalStorageTotal().cartItems,
      cartTatal: this.getLocalStorageTotal().total,
      cartSubTotal: this.getLocalStorageTotal().subTotal,
      cartTax: this.getLocalStorageTotal().tax,
    });
  };

  // Related Products
  relatedProductsFun = () => {
    const Pros = [...this.state.storeProducts];
    const relatedPros = Pros.slice(0, 4);
    return relatedPros;
  };

  // Sort Products By Price
  sortPrice = (value) => {
    let prices = [...this.state.filterdProducts];
    if (value === 'high') {
      prices = [...this.state.filterdProducts].sort(
        (a, b) => b.price - a.price
      );
    } else if (value === 'low') {
      prices = [...this.state.filterdProducts].sort(
        (a, b) => a.price - b.price
      );
    } else {
      prices = [...this.state.filterdProducts];
    }

    this.setState({
      filterdProducts: prices,
    });
  };

  // Four Products Grid Handler
  productsGrid = (grid, name) => {
    this.setState({ numberGrid: grid, nameGrid: name });
  };

  // Add Cart Notification
  notifyAddCart = () => {
    toast.success('Added To Cart', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Add WishList Notification
  notifyAddWishList = () => {
    toast.success('Added To WishList', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Remove Item Notification
  notifyRemoveItem = () => {
    toast.success('remove Item', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Open And Close The DropDown
  dropDownHandler = () => {
    this.setState({
      dropdown: !this.state.dropdown,
    });
  };
  // Close The DropDown
  closeDropDown = () => {
    this.setState({
      dropdown: false,
    });
  };
  // Get Total
  getTotal = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach((item) => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = tax * subTotal;
    total = parseFloat(total.toFixed(2));

    return {
      subTotal,
      cartItems,
      tax,
      total,
    };
  };

  // Add Total
  AddTotal = () => {
    const totals = this.getTotal();
    localStorage.setItem('total', JSON.stringify(totals));
    this.setState({
      cartTatal: totals.total,
      cartTax: totals.tax,
      cartSubTotal: totals.subTotal,
      cartItems: totals.cartItems,
    });
  };
  getLocalStorageTotal = () => {
    const { subTotal = 0, cartItems = 0, tax = 0, total = 0 } = {
      ...JSON.parse(localStorage.getItem('total')),
    };

    return {
      subTotal,
      cartItems,
      tax,
      total,
    };
  };
  // Add To Cart
  AddtoCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find((item) => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
    }
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.notifyAddCart();
        this.AddTotal();
        this.AddToStorage();
      }
    );
  };

  // Add To WishList
  AddtoWishList = (id) => {
    let tempwishlist = [...this.state.wishlist];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempProducts.find((item) => item.id === id);

    tempwishlist = [...tempwishlist, tempItem];

    this.setState(
      () => {
        return { wishlist: tempwishlist };
      },
      () => {
        this.notifyAddWishList();
        this.AddWishListToStorage();
      }
    );
  };

  // Add Local Storage
  AddWishListToStorage = () => {
    localStorage.setItem('wishlist', JSON.stringify(this.state.wishlist));
  };

  // Add Local Storage
  AddToStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  };

  // Get cart From Local Storage
  getStorageCart = () => {
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    return cart;
  };

  // Get WishList From Local Storage
  getStorageWishList = () => {
    let wishlist = [];
    if (localStorage.getItem('wishlist')) {
      wishlist = JSON.parse(localStorage.getItem('wishlist'));
    }
    return wishlist;
  };

  // Get Single Product From Local Storage
  getStorageSingle = () => {
    return localStorage.getItem('product')
      ? JSON.parse(localStorage.getItem('product'))
      : {};
  };

  // Get relatedProduct From Local Storage
  getStorageRelatedProducts = () => {
    return localStorage.getItem('relatedProduct')
      ? JSON.parse(localStorage.getItem('relatedProduct'))
      : [];
  };

  // Set Single Product
  SetSingleProduct = (id) => {
    let product = this.state.storeProducts.find((item) => item.id === id);
    let relatedProducts = this.relatedProductsFun();
    localStorage.setItem('product', JSON.stringify(product));
    localStorage.setItem('relatedProduct', JSON.stringify(relatedProducts));
    console.log(relatedProducts);
    this.setState({
      singleProduct: product,
      relatedProduct: relatedProducts,
      loading: false,
    });
  };

  // Open Details Box
  detailsShow = (id) => {
    let product = this.state.storeProducts.find((item) => item.id === id);
    this.setState({
      singleProduct: product,
      loading: false,
      detailsOpen: !this.state.detailsOpen,
    });
  };

  // Handle Cart Bar
  handleSideCart = () => {
    this.setState(
      () => {
        return { sideCartOpen: !this.state.sideCartOpen };
      },
      () => {
        this.closeDropDown();
      }
    );
  };

  // Open Cart Bar
  closeCart = () => {
    this.setState({ sideCartOpen: false });
  };

  // Cart Functionality
  // increment
  increment = (id) => {
    const tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count++;
    const total = cartItem.price * cartItem.count;
    cartItem.total = parseFloat(total.toFixed(2));
    this.setState(() => {
      return (
        {
          cart: [...tempCart],
        },
        () => {
          this.AddTotal();
          this.AddToStorage();
        }
      );
    });
  };

  // decrement
  decrement = (id) => {
    const tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count--;
    if (cartItem.count === 0) {
      this.removeItem(id);
    }
    const total = cartItem.price * cartItem.count;
    cartItem.total = parseFloat(total.toFixed(2));
    this.setState(() => {
      return (
        {
          cart: [...tempCart],
        },
        () => {
          this.AddTotal();
          this.AddToStorage();
        }
      );
    });
  };

  // remove Item
  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => {
      return item.id !== id;
    });
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.notifyRemoveItem();
        this.AddTotal();
        this.AddToStorage();
      }
    );
  };

  // remove Item from WishList
  removeItemWishList = (id) => {
    let tempwishlist = [...this.state.wishlist];
    tempwishlist = tempwishlist.filter((item) => {
      return item.id !== id;
    });
    this.setState(
      () => {
        return {
          wishlist: [...tempwishlist],
        };
      },
      () => {
        this.notifyRemoveItem();
        this.AddWishListToStorage();
      }
    );
  };

  // clear items
  clearItems = () => {
    console.log('Clear ITems');
  };

  render() {
    return (
      <productsContext.Provider
        value={{
          ...this.state,
          handleSideCart: this.handleSideCart,
          closeCart: this.closeCart,
          AddtoCart: this.AddtoCart,
          SetSingleProduct: this.SetSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearItems: this.clearItems,
          detailsShow: this.detailsShow,
          productsGrid: this.productsGrid,
          sortPrice: this.sortPrice,
          AddtoWishList: this.AddtoWishList,
          removeItemWishList: this.removeItemWishList,
          dropDownHandler: this.dropDownHandler,
          closeDropDown: this.closeDropDown,
        }}
      >
        {this.props.children}
      </productsContext.Provider>
    );
  }
}
const ProductsConsumer = productsContext.Consumer;
export { ProductsContext, ProductsConsumer };
