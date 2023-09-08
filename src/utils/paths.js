import { lazy } from 'react';

import {
  AllUsersPage,
  BuildingTypesPage,
  CottagesPage,
  EndTimePage,
  FifthBuildingPage,
  FourthBuildingPage,
  HalfTimePage,
  LuxuryRoomsPage,
  OrdinaryRoomsPage,
  ReportsPage,
  SecondBuildingPage,
  SixthBuildingPage,
  ThirdBuildingPage,
} from '../pages';

const Home = lazy(() => import('../pages/home'));

export const paths = [
  {
    _id: 0,
    path: '/',
    RenderComp: Home,
    hasChild: false,
  },
  {
    _id: 1,
    path: '/all-users',
    RenderComp: AllUsersPage,
    hasChild: false,
  },
  {
    _id: 2,
    path: '/middle-users',
    RenderComp: HalfTimePage,
    hasChild: false,
  },
  {
    _id: 3,
    path: '/end-users',
    RenderComp: EndTimePage,
    hasChild: false,
  },
  {
    _id: 4,
    path: '/building-control',
    RenderComp: BuildingTypesPage,
    hasChild: true,
    children: [
      {
        _id: 4.1,
        path: 'ordinary-rooms',
        RenderComp: OrdinaryRoomsPage,
      },
      {
        _id: 4.2,
        path: 'luxury-rooms',
        RenderComp: LuxuryRoomsPage,
      },
      {
        _id: 4.3,
        path: 'cottage-rooms',
        RenderComp: CottagesPage,
      },
      {
        _id: 4.4,
        path: 'map/ordinary-rooms/2',
        RenderComp: SecondBuildingPage,
      },
      {
        _id: 4.5,
        path: 'map/luxury-rooms/3',
        RenderComp: ThirdBuildingPage,
      },
      {
        _id: 4.6,
        path: 'map/ordinary-rooms/4',
        RenderComp: FourthBuildingPage,
      },
      {
        _id: 4.6,
        path: 'map/luxury-rooms/5',
        RenderComp: FifthBuildingPage,
      },
      {
        _id: 4.6,
        path: 'map/ordinary-rooms/6',
        RenderComp: SixthBuildingPage,
      },
      {
        _id: 4.6,
        path: 'map/cottage',
        RenderComp: CottagesPage,
      },
    ],
  },
  {
    _id: 5,
    path: '/report',
    RenderComp: ReportsPage,
    hasChild: false,
  },
];
