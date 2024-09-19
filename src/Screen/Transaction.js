import './Transaction.css'
import {useNavigate} from "react-router-dom";

const transactions = [
  {
    type: "Sent to Mark Fade",
    amount: -1900,
    time: "10:45 AM",
  },
  {
    type: "Sent to Tunde Ednut",
    amount: -2000,
    time: "09:30 AM",
  },
  {
    type: "Received from Okunola Funmilayo",
    amount: +2000,
    time: "Yesterday",
  },
  {
    type: "Received from Okunola Timilehin",
    amount: +100,
    time: "Yesterday",
  }
];

function Transaction( ){
	const navigate=useNavigate()
	const clickBtn=()=> {
	navigate("/back",{})
	}
return(
	<div className="transction">
		
	
		<div className="Tp">
			<div className="Tp1">
				<span onClick={clickBtn} className="material-symbols-outlined">
arrow_back
</span>
				<div>Transaction </div>
				<span className="material-symbols-outlined">
more_vert
</span>
			</div>
		</div>
		
		<div className="Ots">
			<div>All categories</div>
			<div>Any status</div>
		</div>
		
		<div className="Dae">
			<div className="Rage">
				<div>23/03/2024 - 23/04/2024</div>
			</div>
			<div className="expeses">
					<div className="In">In:₦23,546.98</div>
					<div className="spae">       </div>
					<div className="Out">Out:₦23,546.98</div>
					
			</div>
		</div>
		
		<div className="withrawal">
		{transactions.map((transaction,index) => (
			<div key={index}>
				<div className="ico"> 
				<div></div>
			</div>
     	   <div className="ttco">
				<div className="typ"> 
					<div>{transactions.type}</div>
				</div>
				<div className="tim">
					<div>{transactions.time}</div>
				</div>
			</div>
			<div className="amoun">
				<div>{transactions.amount}</div>
			</div>
			</div>
	  ))}
      </div>
		
	</div>
);
}

export default Transaction;
