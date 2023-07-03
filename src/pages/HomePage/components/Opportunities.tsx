import React, { useRef, useState, useEffect, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Swiper as SwiperType, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/virtual";

import {
  ArrowBackIos,
  MoreVert,
  VisibilityOutlined,
  ModeEditOutlined,
  DeleteOutlineOutlined,
  ArrowForwardIos,
} from "@mui/icons-material";

import {
  Avatar,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";

import useAuth from "../../../hooks/useAuth";

import { useQuery } from "react-query";

import { fetchOpportunities } from "../../../api/Opportunities";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import { useNavigate } from "react-router-dom";

import {
  IPropPostValues,
  SubmissionsStats,
} from "../../PostingOpportunity/Interfaces/InterfacesOpportunity";

const Opportunity = () => {
  const { token } = useAuth();

  const swiperRef = useRef<SwiperType | undefined>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data, isLoading, isError } = useQuery<IPropPostValues[], Error>(
    "opportunities",
    () => fetchOpportunities(token)
  );

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });
    }
  }, []);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSlidePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSlideNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const [submissionsStats] = useState<SubmissionsStats>({
    pending: 0,
    accepted: 0,
    declined: 0,
    hired: 0,
    scheduled: 0,
  });

  const navigate = useNavigate();
  const goToPost = () => {
    navigate("/creator/opportunities/:id/edit/step-one");
  };

  return (
    <Card>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>Failed to fetch opportunities</p>
      ) : data && data.length > 0 ? (
        <Fragment>
          <div className="mb-6 flex items-center justify-between pr-4">
            <div>
              {!token ? (
                <h1 className="text-2xl font-[600] text-[#6371E0]">
                  opportunities
                </h1>
              ) : (
                <h1 className="text-2xl font-[600] text-[#6371E0]">
                  My opportunities
                </h1>
              )}
            </div>
            <div className="flex items-center">
              {!token ? null : (
                <Button
                  onClick={() => goToPost()}
                  text="New"
                  className="mr-4 rounded-lg border-2 border-[#6371e080] px-5 py-3 font-semibold text-[#6371e0] hover:border-[#6371e0] hover:bg-[#6370e00a] hover:text-[#6371e0]"
                />
              )}
              <div className="flex gap-8">
                <button onClick={handleSlidePrev} disabled={activeIndex === 0}>
                  <ArrowBackIos
                    style={{
                      color:
                        activeIndex === 0 ? "#888888" : "rgb(99, 113, 224)",
                    }}
                  />
                </button>
                <button
                  onClick={handleSlideNext}
                  disabled={activeIndex === (data?.length ?? 0) - 1}
                >
                  <ArrowForwardIos
                    style={{
                      color:
                        activeIndex === (data?.length ?? 0) - 1
                          ? "#888888"
                          : "rgb(99, 113, 224)",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Virtual]}
            spaceBetween={50}
            slidesPerView={4}
            slidesPerGroup={4}
            watchSlidesProgress={true}
            virtual
          >
            {data.map((item, index) => (
              <SwiperSlide key={item.id} virtualIndex={index}>
                <div className="cursor-pointer rounded-t-lg border-2">
                  <img
                    src={item.coverImage}
                    alt="OpportunitiesImage"
                    className="mb-2 h-[150px] w-full rounded-t-lg object-cover"
                  />
                  <div className="mb-12 flex items-start justify-between">
                    <h1 className="px-3 text-base font-semibold text-[#444444]">
                      {item.title}
                    </h1>
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{
                        ml: 2,
                        backgroundColor: "none",
                      }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          backgroundColor: "white",
                        }}
                      >
                        <MoreVert
                          sx={{
                            backgroundColor: "white",
                            color: "gray",
                          }}
                        />
                      </Avatar>
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          boxShadow:
                            "rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 8px 2px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px",
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <VisibilityOutlined fontSize="small" />
                        </ListItemIcon>
                        View
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <ModeEditOutlined fontSize="small" />
                        </ListItemIcon>
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <DeleteOutlineOutlined fontSize="small" />
                        </ListItemIcon>
                        Delete
                      </MenuItem>
                    </Menu>
                  </div>
                  <div className="scrollbar-hidden flex h-auto w-auto scroll-mx-8 items-center gap-2 overflow-auto px-2">
                    <div className="flex h-auto items-center rounded-2xl border">
                      <span className="w-max px-3">
                        Pending ({submissionsStats.pending})
                      </span>
                    </div>
                    <div className="flex h-auto items-center rounded-xl border">
                      <span className="w-max px-3">
                        Scheduled ({submissionsStats.scheduled})
                      </span>
                    </div>
                    <div className="flex h-auto items-center rounded-xl border">
                      <span className="w-max px-3">
                        Hired ({submissionsStats.hired})
                      </span>
                    </div>
                    <div className="flex h-auto items-center rounded-xl border">
                      <span className="w-max px-3">
                        Declined ({submissionsStats.declined})
                      </span>
                    </div>
                    <div className="flex h-auto items-center rounded-xl border">
                      <span className="w-max px-3">
                        Accepted ({submissionsStats.accepted})
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-center">
            <Button
              text="Show More"
              className="mt-10 rounded-lg border-2 border-[#6371e080] px-7 py-2 font-semibold text-[#6371e0] hover:border-[#6371e0] hover:bg-[#6370e00a] hover:text-[#6371e0]"
            />
          </div>
        </Fragment>
      ) : (
        <p className="flex items-center justify-center text-[#3D99F5]">
          No opportunities found.
        </p>
      )}
    </Card>
  );
};

export default Opportunity;
