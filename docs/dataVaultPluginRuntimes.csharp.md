# `dataVaultPluginRuntimes` Submodule <a name="`dataVaultPluginRuntimes` Submodule" id="@cdktn/provider-vault.dataVaultPluginRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPluginRuntimes <a name="DataVaultPluginRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes vault_plugin_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPluginRuntimes(Construct Scope, string Id, DataVaultPluginRuntimesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig">DataVaultPluginRuntimesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig">DataVaultPluginRuntimesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPluginRuntimes.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPluginRuntimes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPluginRuntimes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPluginRuntimes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPluginRuntimes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPluginRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPluginRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes">Runtimes</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Runtimes`<sup>Required</sup> <a name="Runtimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes"></a>

```csharp
public DataVaultPluginRuntimesRuntimesList Runtimes { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPluginRuntimesConfig <a name="DataVaultPluginRuntimesConfig" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPluginRuntimesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Namespace = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type">Type</a></code> | <code>string</code> | Specifies the plugin runtime type to list. Currently only `container` is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the plugin runtime type to list. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}

---

### DataVaultPluginRuntimesRuntimes <a name="DataVaultPluginRuntimesRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPluginRuntimesRuntimes {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPluginRuntimesRuntimesList <a name="DataVaultPluginRuntimesRuntimesList" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPluginRuntimesRuntimesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get"></a>

```csharp
private DataVaultPluginRuntimesRuntimesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataVaultPluginRuntimesRuntimesOutputReference <a name="DataVaultPluginRuntimesRuntimesOutputReference" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPluginRuntimesRuntimesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent">CgroupParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos">CpuNanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime">OciRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless">Rootless</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CgroupParent`<sup>Required</sup> <a name="CgroupParent" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent"></a>

```csharp
public string CgroupParent { get; }
```

- *Type:* string

---

##### `CpuNanos`<sup>Required</sup> <a name="CpuNanos" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos"></a>

```csharp
public double CpuNanos { get; }
```

- *Type:* double

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes"></a>

```csharp
public double MemoryBytes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OciRuntime`<sup>Required</sup> <a name="OciRuntime" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime"></a>

```csharp
public string OciRuntime { get; }
```

- *Type:* string

---

##### `Rootless`<sup>Required</sup> <a name="Rootless" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless"></a>

```csharp
public IResolvable Rootless { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue"></a>

```csharp
public DataVaultPluginRuntimesRuntimes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a>

---



