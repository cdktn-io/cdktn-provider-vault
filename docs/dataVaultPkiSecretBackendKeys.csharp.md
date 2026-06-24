# `dataVaultPkiSecretBackendKeys` Submodule <a name="`dataVaultPkiSecretBackendKeys` Submodule" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendKeys <a name="DataVaultPkiSecretBackendKeys" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/pki_secret_backend_keys vault_pki_secret_backend_keys}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPkiSecretBackendKeys(Construct Scope, string Id, DataVaultPkiSecretBackendKeysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig">DataVaultPkiSecretBackendKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig">DataVaultPkiSecretBackendKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPkiSecretBackendKeys resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiSecretBackendKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiSecretBackendKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiSecretBackendKeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultPkiSecretBackendKeys.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultPkiSecretBackendKeys resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiSecretBackendKeys to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiSecretBackendKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/pki_secret_backend_keys#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.keyInfo">KeyInfo</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.keyInfoJson">KeyInfoJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.keys">Keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `KeyInfo`<sup>Required</sup> <a name="KeyInfo" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.keyInfo"></a>

```csharp
public StringMap KeyInfo { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `KeyInfoJson`<sup>Required</sup> <a name="KeyInfoJson" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.keyInfoJson"></a>

```csharp
public string KeyInfoJson { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.keys"></a>

```csharp
public string[] Keys { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendKeysConfig <a name="DataVaultPkiSecretBackendKeysConfig" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultPkiSecretBackendKeysConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.backend">Backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/pki_secret_backend_keys#id DataVaultPkiSecretBackendKeys#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/pki_secret_backend_keys#backend DataVaultPkiSecretBackendKeys#backend}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/pki_secret_backend_keys#id DataVaultPkiSecretBackendKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendKeys.DataVaultPkiSecretBackendKeysConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/pki_secret_backend_keys#namespace DataVaultPkiSecretBackendKeys#namespace}

---



