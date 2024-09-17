import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            'CurrentLang': 'Language change to English',
            'Welcome to': 'Welcome to',
            'Smartkart': 'Smartkart',
            'Shoes':'Shoes',
            'Trousers':'Trousers',
            'Tshirt':'Tshirt',
            'Shirts':'Shirts',
            'Home': 'Home',
            'Search': 'Search',
            'Wishlist': 'Wish List', 
            'Profile': 'Profile',
            'Change Language': 'Change Language', 
            'Cart': 'Cart',
            'Filter Item': 'Filter Item',
            'Logout':'Logout',
            'Best choice': 'Best choice',
            'Add to wishlist': 'Add to Wishlist',
            'Item Added to WishList successfully': 'Item Added to WishList successfully',
            'Add to cart': 'Add to cart',
            'Item Added to Cart successfully': 'Item Added to Cart successfully',
            'Search Product': 'Search Product',
            'Your': 'Your',
            'Order Details': 'Order Details',
            'Total': 'Total',
            'Checkout': 'Checkout',
            'Amount':'Amount',
            'Payble Amount': 'Payble Amount',
            'Delivery Charges': 'Delivery Charges',
            'Net Total': 'Net Total',
            'Delivery Address': 'Delivery Address',
            'Confirm Buy': 'Confirm Buy',
            'Success': 'Success',
            'Confirm place order': 'Confirm place order',
            'Cancel': 'Cancel',
            'Confirm': 'Confirm',
            'Price Category': 'Price Category',
            'Less then 200': 'Less then 200',
            'to': 'to',
            'greater then 1000': 'greater then 1000',
            'No Filter': 'No Filter',
            'Apply': 'Apply',
        },
    },
    hindi: {
        translation: {
            'CurrentLang': 'हिंदी भाषा में परिवर्तन',
            'Welcome to': 'सुस्वागतम्',
            'Smartkart': 'स्मार्टकार्ट',
            'Shoes':'जूते',
            'Trousers':'पतलून',
            'Tshirt':'टी शर्ट',
            'Shirts':'शर्ट',
            'Home': 'घर',
            'Search': 'खोज करे',
            'Wishlist': 'इच्छा-सूची',
            'Profile': 'रूपरेखा',
            'Change Language': 'भाषा बदलें',
            'Cart': 'कार्ट',
            'Filter Item': 'फ़िल्टर आइटम',
            'Logout': 'लॉग आउट',
            'Best choice': 'सर्वोत्तम पसंद',
            'Add to wishlist': 'इच्छा-सूची में जोड़ें',
            'Item Added to WishList successfully':'आइटम इच्छा-सूची में सफलतापूर्वक जोड़ा गया',
            'Add to cart': 'कार्ट में जोड़ें',
            'Item Added to Cart successfully':'आइटम कार्ट में सफलतापूर्वक जोड़ा गया',
            'Search Product': 'उत्पाद खोजें',
            'Your': 'आपकी',
            'Order Details': 'ऑर्डर का विवरण',
            'Total': 'कुल राशि',
            'Checkout': 'चेक आउट',
            'Amount':'राशि',
            'Payble Amount': 'देय राशि',
            'Delivery Charges': 'वितरण शुल्क',
            'Net Total': 'कुल राशि',
            'Delivery Address': 'वितरण का पता',
            'Confirm Buy': 'खरीद की पुष्टि करें',
            'Success': 'सफल',
            'Confirm place order': 'खरीद की पुष्टि करें',
            'Cancel': 'रद्द करें',
            'Confirm': 'पुष्टि करें',
            'Price Category': 'मूल्य श्रेणी',
            'Less then 200': '200 से कम',
            'to': 'से',
            'greater then 1000': '1000 से अधिक',
            'No Filter': 'कोई फिल्टर नहीं',
            'Apply': 'लागू करे',
        },
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        compatibilityJSON: 'v3',
        lng: I18nManager.isRTL ? 'hindi' : 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;