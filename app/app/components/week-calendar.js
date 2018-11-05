import Component from "@ember/component";
import {computed} from "@ember/object";
import moment from "moment";

export default Component.extend({
  classNames: ['week-calendar'],

  days: computed('kummits.[]', function() {
    let days = {
      'day-1': [],
      'day-2': [],
      'day-3': [],
      'day-4': [],
      'day-5': []
    };
    this.get('kummits').forEach((kummit) => {
      if (kummit.get("start")) {
        days['day-' + moment(kummit.get("start")).day()].push(kummit);
      }
    });
    return days;
  })
});