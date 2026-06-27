/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/plugin_runtimes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataVaultPluginRuntimesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the plugin runtime type to list. Currently only `container` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}
  */
  readonly type?: string;
}
export interface DataVaultPluginRuntimesRuntimes {
}

export function dataVaultPluginRuntimesRuntimesToTerraform(struct?: DataVaultPluginRuntimesRuntimes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataVaultPluginRuntimesRuntimesToHclTerraform(struct?: DataVaultPluginRuntimesRuntimes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVaultPluginRuntimesRuntimesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVaultPluginRuntimesRuntimes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVaultPluginRuntimesRuntimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cgroup_parent - computed: true, optional: false, required: false
  public get cgroupParent() {
    return this.getStringAttribute('cgroup_parent');
  }

  // cpu_nanos - computed: true, optional: false, required: false
  public get cpuNanos() {
    return this.getNumberAttribute('cpu_nanos');
  }

  // memory_bytes - computed: true, optional: false, required: false
  public get memoryBytes() {
    return this.getNumberAttribute('memory_bytes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oci_runtime - computed: true, optional: false, required: false
  public get ociRuntime() {
    return this.getStringAttribute('oci_runtime');
  }

  // rootless - computed: true, optional: false, required: false
  public get rootless() {
    return this.getBooleanAttribute('rootless');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataVaultPluginRuntimesRuntimesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVaultPluginRuntimesRuntimesOutputReference {
    return new DataVaultPluginRuntimesRuntimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/plugin_runtimes vault_plugin_runtimes}
*/
export class DataVaultPluginRuntimes extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_plugin_runtimes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultPluginRuntimes to import
  * @param importFromId The id of the existing DataVaultPluginRuntimes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/plugin_runtimes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultPluginRuntimes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_plugin_runtimes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/plugin_runtimes vault_plugin_runtimes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultPluginRuntimesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVaultPluginRuntimesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_plugin_runtimes',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.1',
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
    this._namespace = config.namespace;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // runtimes - computed: true, optional: false, required: false
  private _runtimes = new DataVaultPluginRuntimesRuntimesList(this, "runtimes", false);
  public get runtimes() {
    return this._runtimes;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
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
      namespace: cdktn.stringToTerraform(this._namespace),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
