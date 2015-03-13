$( "#products" ).on( "click", function( event ) {
    React.render(
        <ProList url='http://api.remix.bestbuy.com/v1/products(name=Apple*)?apiKey=juydxp7yd382chpwcngaq4zq&format=json'/>,
        document.getElementById('content')
    )
})

$( "#reviews" ).on( "click", function( event ) {
    React.render(
        <ReviewList url='http://api.remix.bestbuy.com/v1/reviews(sku=2601005)?apiKey=juydxp7yd382chpwcngaq4zq&format=json'/>,
        document.getElementById('content')
    )
})