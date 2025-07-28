const books = [
    {
        id: "899999999-gh5",
        title: "PARACETAMOL 500MG",
        sellPrice: 7.92,
        cover: "/images/formulary.jpg",
        category: "tablet",
        desc: "This medication has passed our quality control test and has a good expiry date",
        unit: "Tablet",
    },

    {
        id: "89999996543-th5",
        title: "SODIUM CHLORIDE 0.9% 250ML ",
        sellPrice: 7.92,
        cover: "/images/formulary.jpg",
        category: "infusion",
        desc: "This medication has passed our quality control test and has a good expiry date",
        unit: "Bottle",
    },

    {
        id: "89999996543-th510",
        title: "NIFEDIPINE 20MG ",
        sellPrice: 7.92,
        cover: "/images/formulary.jpg",
        category: "tablet",
        desc: "This medication has passed our quality control test and has a good expiry date",
        unit: "Tablet",
    },
    {
        id: "89999996543-th58",
        title: "BUTTERFLY NEEDLE 25G ",
        sellPrice: 7.92,
        cover: "/images/formulary.jpg",
        category: "dressings",
        desc: "This medication has passed our quality control test and has a good expiry date",
        unit: "Piece",
    },

    {
        id: "89999996543-th57",
        title: "BUTTERFLY 23G ",
        sellPrice: 7.92,
        cover: "/images/formulary.jpg",
        category: "dressings",
        desc: "This medication has passed our quality control test and has a good expiry date",
        unit: "Piece",
    },
    {
        id: "89999996543-th55",
        title: "ASPIRIN 81MG ",
        sellPrice: 7.92,
        cover: "/images/formulary.jpg",
        category: "tablet",
        desc: "This medication has passed our quality control test and has a good expiry date",
        unit: "Tablet",
    },
    {
        id: "89999996543-th551",
        title: "CONSULTATION BOOK ",
        sellPrice: 113.52,
        cover: "/images/formulary.jpg",
        category: "Print",
        desc: "This product has passed our quality control test and has a good texture",
        unit: "Piece",
    },
    {
        id: "89999996543-th552",
        title: "DELIVERY KIT ",
        sellPrice: 3800,
        cover: "/images/formulary.jpg",
        category: "kit",
        desc: "This product has passed our quality control test and has a good expiry date",
        unit: "kit",
    },
    {
        id: "89999996543-th553",
        title: "CAESARIAN KIT WITH SPINAL ANAESTHESIA ",
        sellPrice: 34000,
        cover: "/images/formulary.jpg",
        category: "kit",
        desc: "This product has passed our quality control test and has a good expiry date",
        unit: "Kit",
    },
    {
        id: "89999996543-th554",
        title: "CAESARIAN KIT WITH GENERAL ANAESTHESIA ",
        sellPrice: 29000,
        cover: "/images/formulary.jpg",
        category: "kit",
        desc: "This product has passed our quality control test and has a good expiry date",
        unit: "kit",
    },
    {
        id: "89999996543-th555",
        title: "LARGE PRINTED PLASTIC BAG ",
        sellPrice: 47.52,
        cover: "/images/formulary.jpg",
        category: "print",
        desc: "This product has passed our quality control test and has a good texture",
        unit: "Piece",
    },

    {
        id: "89999996543-th556",
        title: "ANC CARD ",
        sellPrice: 50.16,
        cover: "/images/formulary.jpg",
        category: "print",
        desc: "This product has passed our quality control test and has a good texture",
        unit: "Piece",
    },
    {
        id: "89999996543-th557",
        title: "DRUG FORMULARY ",
        sellPrice: 2500,
        cover: "/images/formulary.jpg",
        category: "print",
        desc: "This product has passed our quality control test and has a good texture",
        unit: "Piece",
    },
    {
        id: "89999996543-th558",
        title: "STANDARD TREATMENT GUIDELINES ",
        sellPrice: 3000,
        cover: "/images/formulary.jpg",
        category: "print",
        desc: "This product has passed our quality control test and has a good texture",
        unit: "Piece",
    },
    {
        id: "89999996543-th559",
        title: "HEALTH VOUCHER ",
        sellPrice: 6000,
        cover: "/images/voucher.jpg",
        category: "print",
        desc: "This product has passed our quality control test and has a good texture",
        unit: "Piece",
    },
];

const getAllBooks = () => {
    return books;
};

const getBookById = (id) => {
    return books.find((book) => book.id === id);
};

const getAllContact = () => {
    return contact;
};

const getContactById = (id) => {
    return contact.find((Contact) => Contact.id === id);
};

module.exports = {
    getAllBooks,
    getBookById,
    getAllContact,
    getContactById,
};
