let each = {
    "title" : "Sườn xào chua ngot",
    "servings" : 2,
    "ingredients" : ["400 g sườn thăn"," 4 tbsp nước mắm"," 5 tsp đường"," 5 tsp nước cốt chanh","1/3 bát nước sôi", " hành khô,tỏi,ớt,hành lá"," 2 quả cà chua","hành tây(ớt chuông)"]

};
console.log('Tên món ăn:' + each.title);
console.log('Khẩu phần ăn:' + each.servings);
console.log('thành phần:' );
for (var i = 0 ; i < each.ingredients.length;i++){
    console.log('- ' + each.ingredients[i]);
}