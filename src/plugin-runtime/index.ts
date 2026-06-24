/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PluginRuntimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the parent cgroup to set for each container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#cgroup_parent PluginRuntime#cgroup_parent}
  */
  readonly cgroupParent?: string;
  /**
  * Specifies CPU limit to set per container in billionths of a CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#cpu_nanos PluginRuntime#cpu_nanos}
  */
  readonly cpuNanos?: number;
  /**
  * Specifies memory limit to set per container in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#memory_bytes PluginRuntime#memory_bytes}
  */
  readonly memoryBytes?: number;
  /**
  * The name of the plugin runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#name PluginRuntime#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#namespace PluginRuntime#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies OCI-compliant container runtime to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#oci_runtime PluginRuntime#oci_runtime}
  */
  readonly ociRuntime?: string;
  /**
  * Whether the container runtime is running as a non-privileged user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#rootless PluginRuntime#rootless}
  */
  readonly rootless?: boolean | cdktn.IResolvable;
  /**
  * Specifies the plugin runtime type. Currently only `container` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#type PluginRuntime#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime vault_plugin_runtime}
*/
export class PluginRuntime extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_plugin_runtime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PluginRuntime to import
  * @param importFromId The id of the existing PluginRuntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PluginRuntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_plugin_runtime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/plugin_runtime vault_plugin_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PluginRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: PluginRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_plugin_runtime',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cgroupParent = config.cgroupParent;
    this._cpuNanos = config.cpuNanos;
    this._memoryBytes = config.memoryBytes;
    this._name = config.name;
    this._namespace = config.namespace;
    this._ociRuntime = config.ociRuntime;
    this._rootless = config.rootless;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cgroup_parent - computed: true, optional: true, required: false
  private _cgroupParent?: string; 
  public get cgroupParent() {
    return this.getStringAttribute('cgroup_parent');
  }
  public set cgroupParent(value: string) {
    this._cgroupParent = value;
  }
  public resetCgroupParent() {
    this._cgroupParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupParentInput() {
    return this._cgroupParent;
  }

  // cpu_nanos - computed: true, optional: true, required: false
  private _cpuNanos?: number; 
  public get cpuNanos() {
    return this.getNumberAttribute('cpu_nanos');
  }
  public set cpuNanos(value: number) {
    this._cpuNanos = value;
  }
  public resetCpuNanos() {
    this._cpuNanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuNanosInput() {
    return this._cpuNanos;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_bytes - computed: true, optional: true, required: false
  private _memoryBytes?: number; 
  public get memoryBytes() {
    return this.getNumberAttribute('memory_bytes');
  }
  public set memoryBytes(value: number) {
    this._memoryBytes = value;
  }
  public resetMemoryBytes() {
    this._memoryBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBytesInput() {
    return this._memoryBytes;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // oci_runtime - computed: true, optional: true, required: false
  private _ociRuntime?: string; 
  public get ociRuntime() {
    return this.getStringAttribute('oci_runtime');
  }
  public set ociRuntime(value: string) {
    this._ociRuntime = value;
  }
  public resetOciRuntime() {
    this._ociRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRuntimeInput() {
    return this._ociRuntime;
  }

  // rootless - computed: true, optional: true, required: false
  private _rootless?: boolean | cdktn.IResolvable; 
  public get rootless() {
    return this.getBooleanAttribute('rootless');
  }
  public set rootless(value: boolean | cdktn.IResolvable) {
    this._rootless = value;
  }
  public resetRootless() {
    this._rootless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootlessInput() {
    return this._rootless;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cgroup_parent: cdktn.stringToTerraform(this._cgroupParent),
      cpu_nanos: cdktn.numberToTerraform(this._cpuNanos),
      memory_bytes: cdktn.numberToTerraform(this._memoryBytes),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      oci_runtime: cdktn.stringToTerraform(this._ociRuntime),
      rootless: cdktn.booleanToTerraform(this._rootless),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cgroup_parent: {
        value: cdktn.stringToHclTerraform(this._cgroupParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_nanos: {
        value: cdktn.numberToHclTerraform(this._cpuNanos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_bytes: {
        value: cdktn.numberToHclTerraform(this._memoryBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_runtime: {
        value: cdktn.stringToHclTerraform(this._ociRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rootless: {
        value: cdktn.booleanToHclTerraform(this._rootless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
