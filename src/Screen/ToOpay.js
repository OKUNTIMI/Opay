import './ToOpay.css';

const account =[
	{
		pics:"",
		name:"Okunola Timilehin",
		acct:"9064682274"
},
	{
		pics:"",
		name:"Olamide Emmanuel",
		acct:"8152755666"
},
	{
		pics:"",
		name:"Okunola Funmilayo",
		acct:"7067264488"
}
];

function ToOpay() {
	return(
		<div className="Tocon">
			
			<div className="Otop">
				<div className="OtopT">Transfer to Opay Account</div>
				<div className="OtopH">History</div>
			</div>
			
			<div className="Oadvert">
				<div className="Oadverticon">
				<span class="material-symbols-outlined">
payments
</span>
				</div>
				<div className="Oadverttext">
					Instant, Zero Issues, Free
				</div>
			</div>
			
			<div className="TOpayment">
				<div className="TOpRa">Recipient Account</div>
				<div className="TOpinputs"> 
					<input type="text"/> 
					<div className="TOpicon"><span class="material-symbols-outlined">
qr_code_scanner
</span></div>
				</div>
				<div className="TOptext">
					<div className="TOptext1">Don't know the recipient's Opay Account number?</div>
					<div  className="TOptext2"> Ask them></div>
				</div>
			</div>
			
			<div className="TOaccount">
				<div className="TOaccountHead">
					<div>Reward</div>
					<div>Favourite</div>
				</div>
				<div className="TOaccountAcct">
				{ account.map((item,index)=>(
					<div key={index} className="TOacctholder">
						<div className="TOaccountAcctpics">
						  <div>{item.pics}</div>
						</div>
						<div className="TOaccountAccttexts">
						  <div className="TOaccountAcctname">{item.name}</div>
						  <div className="TOaccountAcctacct">{item.acct}</div>
						</div>
					</div>
				))}
				</div>
				<div className="TOaccountViewall"> 
					<div>View All > </div>
				</div>
			</div>
			
			<div className="TOpayother">
				<div className="TOpayothericon1"></div>
				<div className="TOpayothertext">
					<div className="TOpayothertextt">See who else is using Opay</div>
					<div className="TOpayothertexts">Send money to your contact for free</div>
				</div>
				<div className="TOpayothericon2"></div>
			</div>
			
			<div></div>
			
		</div>
);
}

export default ToOpay;