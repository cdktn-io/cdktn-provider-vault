# `dataVaultKvSecretsListV2` Submodule <a name="`dataVaultKvSecretsListV2` Submodule" id="@cdktn/provider-vault.dataVaultKvSecretsListV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKvSecretsListV2 <a name="DataVaultKvSecretsListV2" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list_v2 vault_kv_secrets_list_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultKvSecretsListV2(Construct Scope, string Id, DataVaultKvSecretsListV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config">DataVaultKvSecretsListV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config">DataVaultKvSecretsListV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultKvSecretsListV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsListV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsListV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsListV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsListV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultKvSecretsListV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultKvSecretsListV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultKvSecretsListV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultKvSecretsListV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKvSecretsListV2Config <a name="DataVaultKvSecretsListV2Config" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultKvSecretsListV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Id = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.mount">Mount</a></code> | <code>string</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list_v2#id DataVaultKvSecretsListV2#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.name">Name</a></code> | <code>string</code> | Full named path of the secret. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list_v2#mount DataVaultKvSecretsListV2#mount}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list_v2#id DataVaultKvSecretsListV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Full named path of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list_v2#name DataVaultKvSecretsListV2#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultKvSecretsListV2.DataVaultKvSecretsListV2Config.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list_v2#namespace DataVaultKvSecretsListV2#namespace}

---



