import React from "react";
import {
  createStyles,
  ThemeIcon,
  Text,
  Group,
  SimpleGrid,
  Box,
} from "@mantine/core";
import { Sun, Phone, MapPin, At } from "tabler-icons-react";
import { Center } from "@mantine/core";
import { Title } from "@mantine/core";
import { BrandDiscord } from "tabler-icons-react";
import { BrandGmail } from "tabler-icons-react";
import { BrandGithub } from "tabler-icons-react";
import { useMantineColorScheme } from "@mantine/core";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    textAlign: "left",
    color:
      variant === "gradient"
        ? theme.colors.gray[6]
        : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white,
  },

  title2: {
    fontWeight: 400,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  const colorScheme = "light";
  const dark = false;
  return (
    <>
      <div className={cx(classes.wrapper, className)} {...others}>
        {variant === "gradient" ? (
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            <Icon size={24} />
          </ThemeIcon>
        ) : (
          <Box mr="md">
            <Icon size={24} />
          </Box>
        )}

        <div>
          <Text size="xs" className={classes.title}>
            {title}
          </Text>
          <Text
            className={classes.description}
            style={{
              color: variant == "white" ? "#fff" : dark ? "#fff" : "#000",
            }}
          >
            {description}
          </Text>
        </div>
      </div>
    </>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  {
    title: "Email",
    description: "andrei.cristian.stan@lttvb.ro",
    icon: BrandGmail,
  },
  { title: "Discord", description: "𝔰𝔭𝔢𝔢𝔡𝔶#3305", icon: BrandDiscord },
  { title: "GitHub", description: "Andrei9383", icon: BrandGithub },
];
const MOCKDATA2 = [
  { title: "Email", description: "serban.toader@lttvb.ro", icon: BrandGmail },
  { title: "Discord", description: "Sbn06#5327", icon: BrandDiscord },
  { title: "GitHub", description: "Sbn06", icon: BrandGithub },
];

export function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Group direction="column">{items}</Group>;
}

export function ContactIconsList2({
  data = MOCKDATA2,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Group direction="column">{items}</Group>;
}

const Contact = () => {
  const { classes, cx } = useStyles({ variant: "gradient" });

  const colorScheme = "light";
  const dark = false;

  return (
    <>
      <div className="contact" style={{ minHeight: "55vh", marginTop: '17%' }}>
        <Center>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
            <div className="as">
              <Title order={3} className="text-center">Șerban Toader</Title>
              <Box
                sx={(theme) => ({
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                  backgroundColor: dark ? theme.colors.dark[6] : theme.white,
                })}
              >
                <ContactIconsList2 />
              </Box>
            </div>
            <div className="sb">
              <Title order={3} className="text-center">Andrei Stan</Title>
              <Box
                sx={(theme) => ({
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                  backgroundImage: `linear-gradient(135deg, ${
                    theme.colors[theme.primaryColor][6]
                  } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
                })}
              >
                <ContactIconsList variant="white" />
              </Box>
            </div>
          </SimpleGrid>
        </Center>
      </div>
      <div
            className="absolute inset-x-0 -top-40 -z-10  overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-yellow-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-300 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-purple-500 to-orange-500 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

    </>
  );
};
export default Contact;
