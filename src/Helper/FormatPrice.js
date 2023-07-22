const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-IN",{
        style:"currency",
        maximumFractionDigits:2,
        currency:"INR",
    }).format(price/100);
 
};

export default FormatPrice