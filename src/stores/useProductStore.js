import { create } from 'zustand';

const useProductStore = create((set) => ({
  products: [
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치1',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치2',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },
    {
      name: '비스포크 멀티형 무풍클래식 에어컨 2등급 AF17B7538TZRS 전국설치3',
      price: 1899000,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168117893709604626.jpg?gif=1&w=960&h=960&c=c',
    },

    {
      name: '[주말특가]트롬 오브제컬렉션 워시타워 W20WANQ 세탁23kg 건조20kg1',
      price: 2707500,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=960&h=960&c=c',
    },
    {
      name: '[주말특가]트롬 오브제컬렉션 워시타워 W20WANQ 세탁23kg 건조20kg2',
      price: 2707500,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=960&h=960&c=c',
    },
    {
      name: '[주말특가]트롬 오브제컬렉션 워시타워 W20WANQ 세탁23kg 건조20kg3',
      price: 2707500,
      image:
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168266558366770905.png?gif=1&w=960&h=960&c=c',
    },
  ],
}));

export default useProductStore;
