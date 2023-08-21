// It’s an alias of the home route i.e., “/”. It's important not to confuse this
// file with layout.js. Whatever you write inside page.js will be displayed
// only on the "/" route, while anything inside layout.js will appear across all
// routes, including the home route i.e., “/”.

//In short, layout.js is the parent of page.js, providing a common layout for
// all pages
function Home() {
  return (
    <div>Home</div>
  )
}

export default Home;
