const books = [
    {
        id: "899999999-gh1",
        title: "DR. RICHARD MBARIKA FONDOH",
        cover: "/images/fondoh1.jpg",
        desc: "Administrator of the North West Regional Fund for Health Promotion (PIG) Bamenda.",
        category: "admin",
    },

    {
        id: "899999999-gh1000",
        title: "DR. RICHARD MBARIKA FONDOH",
        cover: "/images/fondoh4.jpg",
        desc: "Administrator of the North West Regional Fund for Health Promotion (PIG) Bamenda.",
        category: "coverage",
    },

    {
        id: "899999999-gh0002",
        title: "DR. RICHARD MBARIKA FONDOH",
        cover: "/images/fondeh3.jpg",
        desc: " The Administrator of the North West Regional Fund for Health Promotion (PIG) Bamenda is also a member of the Management Committee of the Fund.",

        category: "committee",
        link: " Check the links below and click on Management Committee for more details",
    },

    {
        id: "899999999-gh2",
        title: "KINYUY MARGARET GHAM",

        cover: "/images/maggi.jpg",

        desc: "Head of Section for Administration and Finance for North West Regional Fund for Health Promotion (PIG) Bamenda. ",
        category: "admin",
        link: "  check the links below and click on Accounts for more details",
    },

    {
        id: "899999999-gh3",
        title: "UMEIKAI WYCLIFF AYABA",

        cover: "/images/ayaba.JPG",

        desc: "Head of Section for Health Promotion and  Partnership Support.",
        category: "admin",
        link: "  check the links below and click on Partnership Support for more details",
    },

    {
        id: "899999999-gh6",
        title: "YEMBE NLINWE OLIVER",

        cover: "/images/yembe.JPG",

        desc: "Head of Section for Universal Health Coverage.",
        category: "coverage",
        link: "  check the links below and click on Universal Health Coverage for more details",
    },

    {
        id: "899999999-gh28",
        title: "NJAIBO JARADINE CHEPNGUM",

        cover: "/images/njaibo.jpg",

        desc: "Works as Internal Auditor for the North West Regional Fund",
        category: "admin",
        link: "  check the links below and click on Accounts Section for more details",
    },
    {
        id: "899999999-gh4",
        title: "NDUM SEPHERINE KENG",

        cover: "/images/ndum.JPG",
        stock: 50,
        desc: "Head of Unit for Finance and Accounting",
        category: "accounts",
        link: "  check the links below and click on Accounts for more details",
    },

    {
        id: "899999999-gh32",
        title: "KOMETA PROMISE MBOHLE",

        cover: "/images/promise.jpg",

        desc: "Head of Unit for the Regional Medical Store ",
        category: "store",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },

    {
        id: "899999999-gh34",
        title: "NDEH DONATUS MOKOM",

        cover: "/images/ndeh4.JPG",

        desc: "Head of Unit for Computerized Stock Management ",
        category: "stock",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },

    {
        id: "899999999-gh7",
        title: "KUH FOINMBAM JOSEPH",

        cover: "/images/kuh.JPG",

        desc: "Head of Unit for Distribution and Supervision",
        category: "supervision",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh8",
        title: "NDZI LAWRENCE NGAFFI",

        cover: "/images/ndzi.JPG",

        desc: "Head of Unit for Medical Laboratory",
        category: "lab",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },

    {
        id: "899999999-gh21",
        title: "AYENI ELEEN",

        cover: "/images/eleen.jpg",

        desc: "Head of Unit for Universal Coverage Section of the Regional Fund",
        category: "coverage",
        link: "  check the links below and click on Universal Health Coverage for more details",
    },
    {
        id: "899999999-gh9",
        title: "TUME AMOS NSAWIR",

        cover: "/images/tome.JPG",
        stock: 50,
        desc: "Head of Unit for Human Resources & Logistics",
        category: "logistics",
        link: "  check the links below and click on Logistics for more details",
    },
    {
        id: "899999999-gh22",
        title: "LUKONG JULIUS",

        cover: "/images/lukong.JPG",

        desc: "Works in the Obstetric kit Unit of the Partnership Support Section of the Regional Fund",
        category: "obstetrics",
    },

    {
        id: "899999999-gh33",
        title: "NWA EBUI MARILYNE ",

        cover: "/images/nwa4.jpg",

        desc: "Head of the Quality Control Unit and Reproductive Health Commodities of the Regional Fund",
        category: "quality control",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },

    {
        id: "899999999-gh340",
        title: "NKAIMBI COMFORT",

        cover: "/images/nkambi.JPG",

        desc: "Head of the Sub-Store for Public Health Programs",
        category: "substore",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },

    {
        id: "899999999-gh14",
        title: "NDONG SAMUEL	",

        cover: "/images/ndong.JPG",

        desc: "Assistant Head of Unit for the Regional Medical Store ",
        category: "store",
        link: "  check the links below and click on store for more details",
    },

    {
        id: "899999999-gh13",
        title: "SANGU MUSA SHINTOUO",

        cover: "/images/musa.JPG",
        stock: 50,
        desc: "CHIEF DRIVER.",
        category: "logistics",
        link: "  check the links below and click on logistics for more details",
    },
    {
        id: "899999999-gh10",
        title: "ASAFOR ATUNGOMBI ANIMBOM",

        cover: "/images/anembum.JPG",

        desc: "Administrative Assistant",
        category: "secretariat",
        link: "  check the links below and click on General Secretariat for more details",
    },
    {
        id: "899999999-gh11",
        title: "FON EVELINE MUNDI",

        cover: "/images/fon3.jpg",
        stock: 50,
        desc: "Works in the Computerized Stock Management Unit as an Invoice Clerk.",
        category: "stock",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh12",
        title: "FON SAMUEL CHO	",

        cover: "/images/sam.JPG",

        desc: "logistics",
        category: "genitor",
        link: "  check the links below and click on logistics for more details",
    },

    {
        id: "899999999-gh15",
        title: "FOPA TEMBONG ALIDA",

        cover: "/images/alida.jpg",

        desc: "Works in the Regional Medical Laboratory as a Lab Technician",
        category: "lab",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh16",
        title: "TAMAJONG DIVINE AMBE",

        cover: "/images/ambe.JPG",

        desc: "Works in the Regional Medical Store as Storekeeper",
        category: "store",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh17",
        title: "APO JONAS AMANDONG",

        cover: "/images/apo.JPG",

        desc: "Works in the Regional Medical Store as Storekeeper",
        category: "store",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh18",
        title: "KWANYUY RELINDIS",

        cover: "/images/brenda.jpg",

        desc: "Works as Storekeeper attached to the Kumbo Sub-store in Bui Division of the North West Region of Cameroon",
        category: "kumbo",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh19",
        title: "COMET MBIANDA",

        cover: "/images/comet.JPG",

        desc: "Works as a Driver in the Logistics Unit",
        category: "logistics",
        link: "check the links below and click on logistics for more details",
    },
    {
        id: "899999999-gh20",
        title: "ABAHMUM DENISE",

        cover: "/images/denis.JPG",

        desc: "logistics",
        category: "genitor",
        link: "  check the links below and click on logistics for more details",
    },

    {
        id: "899999999-gh23",
        title: "MBAH JONATHAN",

        cover: "/images/mbah.JPG",

        desc: "Works as a Driver in the Logistics Unit",
        category: "logistics",
        link: "check the links below and click on logistics for more details",
    },
    {
        id: "899999999-gh24",
        title: "ZOW SHEILA CHE",

        cover: "/images/zuh.JPG",

        desc: "Works as a Secretary in the General secretariat of the Regional Fund",
        category: "secretariat",
        link: "check the links below and click on Secretariat for more details",
    },
    {
        id: "899999999-gh25",
        title: "SHAIKA MARTHA",

        cover: "/images/matha2.jpg",

        desc: "Works in the Regional Medical Store as Storekeeper",
        category: "store",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh26",
        title: "IBRAHIM ADAMU",

        cover: "/images/ibrahim.jpg",

        desc: "Works as a Storekeeper in the sub-store for Public Health Programs",
        category: "substore",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh27",
        title: "FOSEH RENITA NCHUYEKE",

        cover: "/images/renita.jpg",
        desc: "Works in the Regional Medical Store as Storekeeper",
        category: "store",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },

    {
        id: "899999999-gh29",
        title: "MUMA NGUM PASCALINE",

        //  isRented: false,
        cover: "/images/pascaline.png",

        desc: "Works as a Cashier for the North West Regional Fund ",
        category: "accounts",
        link: "  check the links below and click on Accounts Section for more details",
    },
    {
        id: "899999999-gh3000",
        title: "NFOR BLAISE",

        cover: "/images/nkambe.jpg",

        desc: "Pharmacy Technician heading the Management of the Nkambe Sub-store of Ndonga and Mantung Division of the North West Region of Cameroon",
        category: "nkambe",
        link: "  check the links below and click on Pharmaceutical Product Management for more details",
    },
    {
        id: "899999999-gh31",
        title: "ZOH DANIEL",

        cover: "/images/dan.jpg",

        desc: "Works as a Driver in the Logistics Unit",
        category: "logistics",
        link: "check the links below and click on logistics for more details",
    },

    {
        id: "899999999-gh032",
        title: "MFUH BELINDA",

        cover: "/images/mfuh.jpg",

        desc: "Works as Input Operator of the Universal HEALTH Coverage Section of thr North West Regional Fund",
        category: "coverage",
        link: "check the links below and click on Universal Health Coverage for more details",
    },

    

    {
        id: "899999999-gh032",
        title: "Doctor NiNG",

        cover: "/images/drning.jpg",

        desc: "Works as Input Operator of the Universal HEALTH Coverage Section of thr North West Regional Fund",
        category: "coverage",
        link: "check the links below and click on Universal Health Coverage for more details",
    },
    


{
        id: "899999999-gh0323",
        title: "Evans",

        cover: "/images/evans.jpg",

        desc: "Chief of Administration and finance for Universal health coverage",
        category: "coverage",
        link: "check the links below and click on Universal Health Coverage for more details",
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
