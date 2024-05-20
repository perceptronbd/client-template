import {
  Square,
  Sliders,
  ToggleRight,
  LayoutGrid,
  List,
  BarChart,
  Edit,
  FileText,
  CheckSquare,
  XSquare,
  PlusCircle,
  MinusCircle,
  Table,
  ClipboardList,
  Package,
} from 'lucide-react';

export const navLinks = [
  {
    title: 'Components',
    links: [
      {
        title: 'Buttons',
        path: '/buttons',
        icon: <Square size={18} />,
      },
      {
        title: 'Inputs',
        path: '/inputs',
        icon: <Sliders size={18} />,
      },
      {
        title: 'Toggles',
        path: '/toggles',
        icon: <ToggleRight size={18} />,
      },
      {
        title: 'Grids',
        path: '/grids',
        icon: <LayoutGrid size={18} />,
      },
    ],
  },
  {
    title: 'Forms',
    links: [
      {
        title: 'Basic Form',
        path: '/basic-form',
        icon: <List strokeWidth={1.3} size={18} />,
      },
      {
        title: 'Advanced Form',
        path: '/advanced-form',
        icon: <Edit size={18} />,
      },
    ],
  },
  {
    title: 'Tables',
    links: [
      {
        title: 'Table',
        path: '/tables/#table',
        icon: <Table size={18} />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        title: 'Bar Chart',
        path: '/charts/bar-chart',
        icon: <BarChart size={18} />,
      },
      {
        title: 'Line Chart',
        path: 'charts/line-chart',
        icon: <FileText size={18} />,
      },
      {
        title: 'Donut Chart',
        path: 'charts/donut-chart',
        icon: <FileText size={18} />,
      },
    ],
  },
  {
    title: 'Tasks',
    links: [
      {
        title: 'Completed Tasks',
        path: '/completed-tasks',
        icon: <CheckSquare size={18} />,
      },
      {
        title: 'Pending Tasks',
        path: '/pending-tasks',
        icon: <XSquare size={18} />,
      },
    ],
  },
  {
    title: 'Extras',
    links: [
      {
        title: 'Add Item',
        path: '/add-item',
        icon: <PlusCircle size={18} />,
      },
      {
        title: 'Remove Item',
        path: '/remove-item',
        icon: <MinusCircle size={18} />,
      },
    ],
  },
];
