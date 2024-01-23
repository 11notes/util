const elevenLogJSON = (type, message) => {
  if(process.env?.DEBUG || (!process.env?.DEBUG && !/debug/i.test(type))){
    console.log(JSON.stringify({
      time:new Date().toISOString(),
      type:type.toUpperCase(),
      msg:message
    }));
  }
}

module.exports = {
  elevenLogJSON
};