var data = [
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d75bbb20e8074e602_Rectangle%20108.jpg",
        discount : "",
        meal : "4-5 Meal",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d5fc8ef6e6127d841_Rectangle%20108-1.jpg",
        discount : "Save up to $12",
        meal : "6-7 Meal",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9c24f1e287b2ea6a19_Rectangle%20108-2.jpg",
        discount : "Save up to $20",
        meal : "8-9 Meal",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d58c6a6a96a2ad5ef_Rectangle%20108-3.jpg",
        discount : "Save up to $27",
        meal : "10-11 Meal",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9ccb70a3f88391e136_Rectangle%20108-4.jpg",
        discount : "Save up to $33",
        meal : "12 Meal",
    },
];

data.map(function(el){
    var box = document.createElement("div");

    var overDiv = document.createElement("div");
    overDiv.setAttribute("class", "overlayDiv")
   
    var image = document.createElement("img");
    image.src = el.imgUrl;
    image.style.margin = "0px 0px 16px";
    image.style.height = "170px";
    

    var overText = document.createElement("p");
    overText.innerText = el.discount;
    overText.setAttribute("class","para");

    var mealcount = document.createElement("h2");
    mealcount.innerText = el.meal;
    mealcount.style.textAlign = "center";
    mealcount.style.color = "#357471";
    mealcount.style.fontSize = "30px";
    mealcount.style.marginTop = "0px";
    mealcount.style.marginBottom = "0px";

    overDiv.append(image, overText);
    box.append(overDiv, mealcount);
    document.querySelector("#discmenu").append(box);
});


var allMenu = [
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",
        title : "Steak Pappercorn",
        detail : "500 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",
        title : "Homestyle Chicken",
        detail : "560 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",
        title : "Cauliflower Shell Beef Bolognese",
        detail : "490 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6be2ee61ff2719dff7cd_production-meal-image-0a3b0cc8-11c7-4dd7-9b62-21a8a91c6a07.jpeg",
        title : "Three-Grain Harvest Bowl",
        detail : "420 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg",
        title : "Sausage Baked Penne",
        detail : "470 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",
        title : "Savory-Sweet Chicken Teriyaki Bowl",
        detail : "480 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg",
        title : "Protein-Packed Chicken Parm",
        detail : "410 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",
        title : "Golden Oven-Fried Chicken & Mash",
        detail : "510 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",
        title : "Zingy Buffalo Chicken",
        detail : "470 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg",
        title : "White Bean Turkey Chili Bowl",
        detail : "540 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba186c67063830ea67a_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpeg",
        title : "Pork Carnitas",
        detail : "480 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba5f589fe69d6562dee_production-meal-image-a4feff11-ec91-43e8-bab5-e6daf8b55eea.jpeg",
        title : "Sesame-Ginger Chicken & Noodles",
        detail : "430 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba8406d133a498de788_production-meal-image-e184440d-cfea-4806-b7e3-1e5856975959.jpeg",
        title : "Sautéed French Green Beans (11 oz)",
        detail : "140 Cal | Gluten Free | Multi-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",
        title : "Chicken Tikka Masala",
        detail : "570 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg",
        title : "Masterful Mash (16 oz)",
        detail : "160 Cal | Gluten Free | Multi-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640534648a3861409719e_production-meal-image-a06ce51f-74b3-429e-8ff1-ada01979e783.jpeg",
        title : "Masterful Mac & Cheese (15 oz)",
        detail : "470 Cal | Gluten Free | Multi-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg",
        title : "3 Grilled Chicken Breasts (9.75 oz)",
        detail : "160 Cal | Gluten Free | Multi-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg",
        title : "8 Baked Turkey Meatballs (9.98 oz)",
        detail : "110 Cal | Gluten Free | Multi-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bc1b3af4007be53c093_production-meal-image-51fe566d-7bc5-4500-91b0-622d6c2e665c.jpeg",
        title : "Unwrapped Salsa Verde Burrito",
        detail : "400 Cal | Gluten Free | Multi-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bc4aa4db184af441ba7_production-meal-image-b845ba48-1300-4ecb-b9d0-d545b084f15a.jpeg",
        title : "Farmstead Baked Lentil Pasta",
        detail : "500 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bfdfa4a1561bccc8cb2_production-meal-image-6dcb7ec8-8907-481c-b9d1-4bb54a42a89c.jpeg",
        title : "K-Town Pork & Purple Sticky Rice",
        detail : "590 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bd0df3b6577c7d15aa4_production-meal-image-c92760b3-d1c8-463a-9721-8effc5cbc614.jpeg",
        title : "Miso-Glazed Beef Bowl",
        detail : "330 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bda86c670c07a0efcd2_production-meal-image-86d5fe9a-e01f-4af5-b246-e68d2eb8aebb.jpeg",
        title : "Purely Plant Shepherd’s Pie",
        detail : "410 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cacd24d59cc5d1b4446a_production-meal-image-a181a354-9004-4837-aaef-2bd21f302cd2.jpeg",
        title : "Baja Green-Chile Chicken Stew",
        detail : "470 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bf7fa4a155c27cc8b88_production-meal-image-207ee5a9-50b6-4d3f-a0bb-e31354d0e606.jpeg",
        title : "Creamy Mushroom Risotto",
        detail : "460 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cad41114fea4ee46688c_production-meal-image-62334c4d-66da-4308-98f3-568dca0d56ac.jpeg",
        title : "Springtime Chicken Florentine",
        detail : "480 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cad7153a67ff54f88bde_production-meal-image-65b4c30a-d728-4370-bea5-7378fde418ce.jpeg",
        title : "Chicken Alla No Vodka",
        detail : "520 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cadb7521be99fe849486_production-meal-image-938266c6-577c-425f-ae6f-b95ef5864266.jpeg",
        title : "Wild-Caught Fish Cake",
        detail : "570 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cade6d81fe66361c1beb_production-meal-image-0287e25c-7e2a-47fd-acef-ebaff360e858.jpeg",
        title : "Bistro French Onion Chicken",
        detail : "630 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cae1eb2a7d2974355a67_production-meal-image-aecde057-5044-40d0-858b-7c27f4e9d304.jpeg",
        title : "Turkey Meatballs",
        detail : "410 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bf10a8aa972b7670255_production-meal-image-8f27cccd-b0db-405a-9341-3f4adabcbe9c.jpeg",
        title : "Chicken Cordon Bleu",
        detail : "710 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cae624d59c06edb45df5_production-meal-image-15a9c363-f1e7-46a4-aa51-ba813287556a.jpeg",
        title : "Chicken & Spring Pea Risotto",
        detail : "590 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cae99b704071e41577a5_production-meal-image-25f9ce2d-ca21-499e-a140-8d59b4733ec2.jpeg",
        title : "Flame-Seared Top Blade Steak",
        detail : "610 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bd35a38e27af54e3f3e_production-meal-image-68fb94dd-b723-4a29-8a8e-ad7b6a02c2ec.jpeg",
        title : "Chicken ’n’ Drop Biscuits1",
        detail : "700 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106406e186b52870a4ef9b9_production-meal-image-e11563a9-0714-42b4-aac9-239a7592018b.jpeg",
        title : "Keto-Friendly Chicken Bowl",
        detail : "340 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064033d2877aaa317edab7_production-meal-image-f28dfb4e-efc8-4dff-b95c-9239797edcb0.jpeg",
        title : "Shrimp & Andouille Paella",
        detail : "530 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bfaee61ff381ae00518_production-meal-image-4aa973ed-846f-4957-9341-272c1125725d.jpeg",
        title : "Very Verde Chicken",
        detail : "470 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bee549a61ddbce0691d_production-meal-image-603e4274-71b0-48a1-8072-c11baab58220.jpeg",
        title : "Chipotle Chicken Bowl",
        detail : "240 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c19df3b6557b5d15ae8_production-meal-image-1ae8822e-987c-4a7e-8961-557d69673c01.jpeg",
        title : "Tricolor Beef Lasagna",
        detail : "650 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c1c549a617576e07d76_production-meal-image-353ecb3a-15e4-465e-bb69-4b91e4c6b004.jpeg",
        title : "Traditional Beef Stew",
        detail : "260 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c13fa4a152d43cc96d6_production-meal-image-fa4ff532-e487-4656-b98f-f489d59e73b6.jpeg",
        title : "Indian-Spiced Chickpea Curry Bowl",
        detail : "360 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6be4ee61ff706bdff870_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg",
        title : "BBQ Bison Burger*",
        detail : "600 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c064b4b238487a0b2b0_production-meal-image-2e64815b-800d-4a38-9664-c7a524148b2f.jpeg",
        
        title : "Jerk Chicken Bowl",
        detail : "380 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c0f6dd23b0f8012af30_production-meal-image-93be0073-891b-4443-a6a0-9ab21a1d309c.jpeg",
        title : "Sticky-Sweet BBQ Beef Bowl",
        detail : "390 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c2f2037c26803188fee_production-meal-image-7a3ba895-37a7-4f47-9e32-3667bb6141d3.jpeg",
        title : "Sheet Pan Chicken",
        detail : "420 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bde0c617f531e552730_production-meal-image-933355a9-e575-456c-9961-d6ac01cb50da.jpeg",
        title : "Oven-Baked Sweet Potato Cakes",
        detail : "430 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c264b4b234713a0e3fe_production-meal-image-1daa7db4-183a-4aa0-bd4c-2ab21a5a47a5.jpeg",
        title : "Brown-Butter Pork & Cauli Shells",
        detail : "600 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cb189b70408441158c60_production-meal-image-ff2c65b9-af43-4b4f-af72-835f41bc4a2b.jpeg",
        title : "Hearty Veggie Bolognese",
        detail : "470 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bd74b4b23e889a06f18_production-meal-image-7448fb51-c1f4-4ac8-ad5b-1406fc1bfcfd.jpeg",
        title : "Huli Huli Chicken",
        detail : "460 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6236cb1e5d5aab2e48720062_production-meal-image-d779e243-ce99-4811-9150-bb3a6964f682.jpeg",
        title : "Salsa Fresca Chicken",
        detail : "430 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c0a2037c265ce187aed_production-meal-image-2f53a0bb-c83f-48f7-b920-53e9157ac5e1.jpeg",
        title : "Super-Grain Pulled Pork Bowl",
        detail : "400 Cal | Gluten Free | Single-Serve",
    },
    {
        imgUrl : "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bcd85b43c0274a0ac73_production-meal-image-197e49d6-cfcc-4a4b-b0ea-4854553694de.jpeg",
        title :"Middle Eastern Falafel",
        detail : "470 Cal | Gluten Free | Single-Serve",
    },
];

allMenu.map(function(elem){

    var box2 = document.createElement("div");
    box2.className="img_div_container"
    var imgdiv = document.createElement("div")
    imgdiv.setAttribute("class","imgbox");


    var image2 = document.createElement("img");
    image2.src = elem.imgUrl;
    image2.style.objectFit = "cover";
    image2.style.borderRadius = "20px";
    image2.setAttribute("class","imageAnimate");
    
    
    var titleText = document.createElement("h2");
    titleText.innerText = elem.title;
    titleText.style.color = "#333339";
    titleText.style.margin = "0px";
    titleText.style.fontSize = "17px";
    
    var mdetails = document.createElement("p");
    mdetails.innerText = elem.detail;
    mdetails.style.color = "#4f7488";
    mdetails.style.fontSize = "15px";
    mdetails.style.marginTop = "4px";
    
    box2.append(image2);
    imgdiv.append(box2, titleText, mdetails);
    document.querySelector("#menuData").append(imgdiv);
});