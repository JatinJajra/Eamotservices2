import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LoaderType = "pulse" | "wave" | "lightning" | "circuit" | "spinner";
type LoaderSize = "xs" | "sm" | "md" | "lg" | "xl";
type LoaderColor = "primary" | "accent" | "success" | "warning" | "danger" | "info";

interface EnergyLoaderProps {
  type?: LoaderType;
  size?: LoaderSize;
  color?: LoaderColor;
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

export const EnergyLoader = ({
  type = "pulse",
  size = "md",
  color = "primary",
  text,
  className,
  fullScreen = false,
}: EnergyLoaderProps) => {
  const containerClasses = cn(
    "flex flex-col items-center justify-center",
    fullScreen && "fixed inset-0 bg-white/90 z-50",
    className
  );

  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const colorClasses = {
    primary: "text-primary",
    accent: "text-accent",
    success: "text-green-500",
    warning: "text-amber-500",
    danger: "text-red-500",
    info: "text-blue-500",
  };

  const renderLoader = () => {
    switch (type) {
      case "pulse":
        return <PulseLoader size={size} color={color} />;
      case "wave":
        return <WaveLoader size={size} color={color} />;
      case "lightning":
        return <LightningLoader size={size} color={color} />;
      case "circuit":
        return <CircuitLoader size={size} color={color} />;
      case "spinner":
        return <SpinnerLoader size={size} color={color} />;
      default:
        return <PulseLoader size={size} color={color} />;
    }
  };

  return (
    <div className={containerClasses}>
      {renderLoader()}
      {text && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`mt-4 font-medium ${colorClasses[color]}`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Pulse Loader - Energy Orb that pulses
const PulseLoader = ({ size, color }: { size: LoaderSize; color: LoaderColor }) => {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const colorClasses = {
    primary: "bg-primary",
    accent: "bg-accent",
    success: "bg-green-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
  };

  const shadowColor = {
    primary: "#3498db",
    accent: "#f39c12",
    success: "#2ecc71",
    warning: "#f39c12",
    danger: "#e74c3c",
    info: "#3498db",
  };

  return (
    <div className="relative">
      <motion.div
        className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]} opacity-75`}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            `0 0 0px ${shadowColor[color]}`,
            `0 0 20px ${shadowColor[color]}`,
            `0 0 0px ${shadowColor[color]}`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute inset-0 rounded-full ${colorClasses[color]} opacity-40`}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Wave Loader - Energy Waves
const WaveLoader = ({ size, color }: { size: LoaderSize; color: LoaderColor }) => {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const colorClasses = {
    primary: "bg-primary",
    accent: "bg-accent",
    success: "bg-green-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 rounded-full ${colorClasses[color]} opacity-${3 - i}0`}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center`}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className={`w-1/3 h-1/3 rounded-full ${colorClasses[color]}`} />
      </motion.div>
    </div>
  );
};

// Lightning Loader - Electric Bolt
const LightningLoader = ({ size, color }: { size: LoaderSize; color: LoaderColor }) => {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const colorClasses = {
    primary: "text-primary",
    accent: "text-accent",
    success: "text-green-500",
    warning: "text-amber-500",
    danger: "text-red-500",
    info: "text-blue-500",
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        className={`${colorClasses[color]} w-full h-full`}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 1, 0.3], 
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <path
          d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
      <motion.div
        className={`absolute inset-0 rounded-full bg-current opacity-20 ${colorClasses[color]}`}
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

// Circuit Loader - Electric Circuit
const CircuitLoader = ({ size, color }: { size: LoaderSize; color: LoaderColor }) => {
  const sizeClasses = {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28",
    xl: "w-36 h-36",
  };

  const colorClasses = {
    primary: "stroke-primary",
    accent: "stroke-accent",
    success: "stroke-green-500",
    warning: "stroke-amber-500",
    danger: "stroke-red-500",
    info: "stroke-blue-500",
  };

  const dotColorClasses = {
    primary: "bg-primary",
    accent: "bg-accent",
    success: "bg-green-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
  };

  const sequence = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={sizeClasses[size]}>
      <svg viewBox="0 0 100 100" className={`w-full h-full ${colorClasses[color]}`}>
        <motion.path
          d="M10,50 L30,50 L30,30 L70,30 L70,50 L90,50"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M10,70 L30,70 L30,90 L70,90 L70,70 L90,70"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M30,50 L30,70"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M70,50 L70,70"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Dots moving through circuit */}
      {sequence.map((i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full w-2 h-2 ${dotColorClasses[color]}`}
          initial={{ 
            x: 10, 
            y: 50,
            scale: 0,
          }}
          animate={{
            x: [10, 30, 30, 70, 70, 90, 70, 70, 30, 30, 10],
            y: [50, 50, 30, 30, 50, 50, 70, 90, 90, 70, 70],
            scale: [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Spinner Loader - Rotating Electric Element
const SpinnerLoader = ({ size, color }: { size: LoaderSize; color: LoaderColor }) => {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const colorClasses = {
    primary: "text-primary",
    accent: "text-accent",
    success: "text-green-500",
    warning: "text-amber-500",
    danger: "text-red-500",
    info: "text-blue-500",
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} relative`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="3"
        />
        <motion.path
          d="M12 2C6.48 2 2 6.48 2 12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Energy elements */}
        {[0, 1, 2].map((idx) => (
          <motion.circle
            key={idx}
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="1,5"
            strokeLinecap="round"
            fill="none"
            initial={{ rotate: idx * 30 }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 3,
              delay: idx * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.svg>
      
      {/* Center dot */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`w-1/4 h-1/4 rounded-full bg-current`} />
      </motion.div>
    </div>
  );
};

// Export all loader components individually
export const PulseEnergyLoader = (props: EnergyLoaderProps) => <EnergyLoader type="pulse" {...props} />;
export const WaveEnergyLoader = (props: EnergyLoaderProps) => <EnergyLoader type="wave" {...props} />;
export const LightningEnergyLoader = (props: EnergyLoaderProps) => <EnergyLoader type="lightning" {...props} />;
export const CircuitEnergyLoader = (props: EnergyLoaderProps) => <EnergyLoader type="circuit" {...props} />;
export const SpinnerEnergyLoader = (props: EnergyLoaderProps) => <EnergyLoader type="spinner" {...props} />;