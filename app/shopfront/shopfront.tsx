import { BookComponent } from "~/shared/components/book-component/bookcomponent";

export function ShopFront() {
  return (
    <main>
       <div><h2>Books Catalog</h2></div>
       <div className="container m-auto grid grid-cols-4 gap-4">
        <div>
              <BookComponent book={{ bookid: 1, title: 'The Stand', genre:'Horror', 
                  author: [{authorid: 1, 
                  firstname: 'Stephen', 
                  lastname: 'King'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 2, title: 'Rolling Heads', genre:'Horror', 
                      author: [{authorid: 1, 
                      firstname: 'Josh', 
                      lastname: 'Winning'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 3, title: 'The Last Seance', genre:'Supernautral', 
                      author: [{authorid: 1, 
                      firstname: 'Agatha', 
                      lastname: 'Christie'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 1, title: 'The Stand', genre:'Horror', 
                  author: [{authorid: 1, 
                  firstname: 'Stephen', 
                  lastname: 'King'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 2, title: 'Rolling Heads', genre:'Horror', 
                      author: [{authorid: 1, 
                      firstname: 'Josh', 
                      lastname: 'Winning'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 3, title: 'The Last Seance', genre:'Supernautral', 
                      author: [{authorid: 1, 
                      firstname: 'Agatha', 
                      lastname: 'Christie'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 1, title: 'The Stand', genre:'Horror', 
                  author: [{authorid: 1, 
                  firstname: 'Stephen', 
                  lastname: 'King'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 2, title: 'Rolling Heads', genre:'Horror', 
                      author: [{authorid: 1, 
                      firstname: 'Josh', 
                      lastname: 'Winning'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 3, title: 'The Last Seance', genre:'Supernautral', 
                      author: [{authorid: 1, 
                      firstname: 'Agatha', 
                      lastname: 'Christie'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 1, title: 'The Stand', genre:'Horror', 
                  author: [{authorid: 1, 
                  firstname: 'Stephen', 
                  lastname: 'King'}] }} >
              </BookComponent>
          </div>
          <div>
              <BookComponent book={{ bookid: 2, title: 'Rolling Heads', genre:'Horror', 
                      author: [{authorid: 1, 
                      firstname: 'Josh', 
                      lastname: 'Winning'}] }} >
              </BookComponent>
          </div>
       </div>
       
    </main>
  );
}