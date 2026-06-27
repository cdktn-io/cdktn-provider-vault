# `dataVaultKvSecretsList` Submodule <a name="`dataVaultKvSecretsList` Submodule" id="@cdktn/provider-vault.dataVaultKvSecretsList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKvSecretsList <a name="DataVaultKvSecretsList" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list vault_kv_secrets_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultKvSecretsList(Construct Scope, string Id, DataVaultKvSecretsListConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig">DataVaultKvSecretsListConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig">DataVaultKvSecretsListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultKvSecretsList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsList.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsList.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsList.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

DataVaultKvSecretsList.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataVaultKvSecretsList resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultKvSecretsList to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultKvSecretsList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultKvSecretsList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.path">Path</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsList.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKvSecretsListConfig <a name="DataVaultKvSecretsListConfig" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new DataVaultKvSecretsListConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Path,
    string Id = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.path">Path</a></code> | <code>string</code> | Full KV-V1 path where secrets will be listed. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list#id DataVaultKvSecretsList#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Full KV-V1 path where secrets will be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list#path DataVaultKvSecretsList#path}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list#id DataVaultKvSecretsList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.dataVaultKvSecretsList.DataVaultKvSecretsListConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/data-sources/kv_secrets_list#namespace DataVaultKvSecretsList#namespace}

---



