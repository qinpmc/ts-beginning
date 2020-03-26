// ts -> .d.ts 翻译文件 @types/superagent -> js
import superagent from "superagent";
import cheerio from "cheerio";

interface Course {
  title: string;
  count: number;
}

class Crowller {
  private secret = "secretKey";
  private url = `http://www.zhufengpeixun.cn/`;

  /*
  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find(".course-desc");
      const title = descs.eq(0).text();
      const count = parseInt(
        descs
          .eq(1)
          .text()
          .split("：")[1],
        10
      );
      courseInfos.push({ title, count });
    });
    const result = {
      time: new Date().getTime(),
      data: courseInfos
    };
    console.log(result);
  }
  */

  getBanners(html: string) {
    const $ = cheerio.load(html);
    const items = $(".content_title");
    const infos: string[] = [];
    items.map((index, item) => {
      infos.push($(item).text());
      //console.log($(this).text());//为空
    });
    return infos;
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    const infos = this.getBanners(result.text);
    console.log(infos);
  }

  getRawHtmlByPromise() {
    const pro = superagent.get(this.url);
    pro
      .then(res => {
        const infos = this.getBanners(res.text);
        return infos;
      })
      .then(infos => {
        console.log(infos);
      });
  }

  constructor() {
    //this.getRawHtml();
    this.getRawHtmlByPromise();
  }
}

const crowller = new Crowller();
