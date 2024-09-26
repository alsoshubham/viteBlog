import { useContext } from "react"
import { AppContext } from "../Context/appContext"


export const Pagging = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext);
   return (
   <div>
     <div className="flex flex-row justify-evenly">
      { page > 1 &&
      (<button onClick={() => handlePageChange(page-1)}>
      Previous
    </button>)
      }
      { page < totalPages &&
        (<button onClick={() => handlePageChange(page+1)}>
        Next
      </button>)
      }
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
   </div>
  )
}
