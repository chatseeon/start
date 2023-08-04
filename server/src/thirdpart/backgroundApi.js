const axios = require("axios");

/**
 * 随机获取背景
 * @return {Promise<*[]>}
 */
async function getRandomBackground() {
  const api = "https://moe.anosu.top/api/?sort=1080p";
  return await axios.get(api).then((res) => res.data.imgurl);
}

module.exports = {
  getRandomBackground,
};
