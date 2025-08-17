import { useState, useEffect } from "react";
import { BookComponent } from "~/shared/components/book-component/bookcomponent";
import { BookService } from "~/shared/services/bookservice"

export function ShopFront() {
  const service = BookService();
  //const data = service.searchBooks();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const searchbooks = async () => {
    setIsLoading(true);

    const results = await service.searchBooks();

    setData(results);

    setIsLoading(false);
  };

  useEffect(() => {
    searchbooks();
  }, data)


  return (
    <main>
       <div><h2>Books Catalog</h2></div>
       <div className="container m-auto grid grid-cols-4 gap-4">
        { isLoading ? <p>Loading</p> :<></>}
      { (data && !isLoading) ?
            data.map((item, index) => 
            <div>
              <BookComponent key={ item["bookID"] } 
                    book={{ bookID: item["bookID"], title: item["title"], genre: item["genre"], 
                  authors: item["authors"] }} >
              </BookComponent>
            </div>) : <></> }
       </div>
       
    </main>
  );
}