import { useEffect } from "react";
import { api } from "~/utils/api";
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

interface UserActivityData {
  id: string;
  timeZone: string;
  region: string;
  country: string;
  page: string;
  timeSpent: number;
  scrolling: number;
  mouseClicks: number;
  buttonClicks: number;
  linkClicks: number;
  mouseMoveInt: number;
  keyClicks: number;
}

export const useUserActivity = (): void => {
  const ctx = api.useContext();

  const userActivity: UserActivityData = {
    id: id,
    timeZone: "",
    region: "",
    country: "",
    page: "",
    timeSpent: 0,
    scrolling: 0,
    mouseClicks: 0,
    buttonClicks: 0,
    linkClicks: 0,
    mouseMoveInt: 0,
    keyClicks: 0,
  };

  // Call API to save the user activity to DB
  const createAnalyticsMutation = api.analytics.create.useMutation({
    onSuccess: () => {
      void ctx.courses.getAll.invalidate();
    }
  });

  useEffect(() => {
    // Get the user's timezone, region, and country
    userActivity.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    userActivity.region = window.navigator.language;
    // userActivity.country = window.navigator.country;

    // Track the current page URL
    userActivity.page = window.location.href;

    // Track the time spent on the page
    const startTime = new Date().getTime();
    window.addEventListener("beforeunload", () => {
      const endTime = new Date().getTime();
      const timeSpent = endTime - startTime;
      userActivity.timeSpent = timeSpent;
      createAnalyticsMutation.mutate(userActivity);
    });

    // Track scrolling
    window.addEventListener("scroll", () => {
      userActivity.scrolling = window.pageYOffset;
      createAnalyticsMutation.mutate(userActivity);
    });

    // Track mouse clicks
    document.addEventListener("click", () => {
      userActivity.mouseClicks++;
      createAnalyticsMutation.mutate(userActivity);
    });

    // Track button clicks
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        userActivity.buttonClicks++;
        createAnalyticsMutation.mutate(userActivity);
      });
    });

    // Track link clicks
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        userActivity.linkClicks++;
        createAnalyticsMutation.mutate(userActivity);
      });
    });

    // Track mouse movements
    document.addEventListener("mousemove", () => {
      userActivity.mouseMoveInt++;
      createAnalyticsMutation.mutate(userActivity);
    });

    // Track key clicks
    document.addEventListener("keydown", () => {
      userActivity.keyClicks++;
      createAnalyticsMutation.mutate(userActivity);
    });
  });
};
