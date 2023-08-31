import { lazy } from 'react';
import {
  AllUsersPage,
  BuildingTypesPage,
  CottagesPage,
  EndTimePage,
  FifthBuildingPage,
  FourthBuildingPage,
  HalfTimePage,
  LoginPage,
  LuxuryRoomsPage,
  OrdinaryRoomsPage,
  RegisterPage,
  ReportsPage,
  SecondBuildingPage,
  SixthBuildingPage,
  ThirdBuildingPage,
} from '../pages';
const Home = lazy(() => import('../pages/home'));

export const paths = [
  {
    id: 1,
    Component: Home,
    path: '/',
    hasChild: false,
  },
  {
    id: 2,
    Component: AllUsersPage,
    path: '/all-users',
    hasChild: false,
  },
  {
    id: 3,
    Component: HalfTimePage,
    path: '/half-time',
    hasChild: false,
  },
  {
    id: 4,
    Component: EndTimePage,
    path: '/end-time',
    hasChild: false,
  },
  {
    id: 5,
    Component: BuildingTypesPage,
    path: '/building-control',
    hasChild: true,
    children: [
      {
        id: 5.1,
        Component: OrdinaryRoomsPage,
        path: 'ordinary-rooms',
        hasChild: true,
        children: [
          {
            id: '5-1-1',
            Component: SecondBuildingPage,
            path: '2',
            hasChild: false,
          },
          {
            id: '5-1-2',
            Component: FourthBuildingPage,
            path: '4',
            hasChild: false,
          },
          {
            id: '5-1-3',
            Component: SixthBuildingPage,
            path: '6',
            hasChild: false,
          },
        ],
      },
      {
        id: 5.2,
        Component: LuxuryRoomsPage,
        path: 'luxury-rooms',
        hasChild: true,
        children: [
          {
            id: '5-2-1',
            Component: ThirdBuildingPage,
            path: '3',
            hasChild: false,
          },

          {
            id: '5-2-2',
            Component: FifthBuildingPage,
            path: '5',
            hasChild: false,
          },
        ],
      },
      {
        id: 5.3,
        Component: CottagesPage,
        path: 'map/cottage',
        hasChild: false,
        children: [],
      },
    ],
  },
  {
    id: 6,
    Component: ReportsPage,
    path: '/report',
    hasChild: false,
  },
];
