import Test from "../model/Test";

const homeController = (req, res) => {
  res.render("screens/home");
};
const testController = async (req, res) => {
  const testList = await Test.find({}, {});

  console.log(testList);

  res.render("screens/test", { testList });
};

const globalController = {
  homeController,
  testController,
};

export default globalController;
