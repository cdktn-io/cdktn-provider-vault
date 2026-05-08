# `kvSecretV2` Submodule <a name="`kvSecretV2` Submodule" id="@cdktn/provider-vault.kvSecretV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KvSecretV2 <a name="KvSecretV2" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2 vault_kv_secret_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KvSecretV2(Construct Scope, string Id, KvSecretV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config">KvSecretV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config">KvSecretV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata">PutCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetCas">ResetCas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDataJson">ResetDataJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWo">ResetDataJsonWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWoVersion">ResetDataJsonWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions">ResetDeleteAllVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead">ResetDisableRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetadata` <a name="PutCustomMetadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata"></a>

```csharp
private void PutCustomMetadata(KvSecretV2CustomMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---

##### `ResetCas` <a name="ResetCas" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetCas"></a>

```csharp
private void ResetCas()
```

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata"></a>

```csharp
private void ResetCustomMetadata()
```

##### `ResetDataJson` <a name="ResetDataJson" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDataJson"></a>

```csharp
private void ResetDataJson()
```

##### `ResetDataJsonWo` <a name="ResetDataJsonWo" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWo"></a>

```csharp
private void ResetDataJsonWo()
```

##### `ResetDataJsonWoVersion` <a name="ResetDataJsonWoVersion" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWoVersion"></a>

```csharp
private void ResetDataJsonWoVersion()
```

##### `ResetDeleteAllVersions` <a name="ResetDeleteAllVersions" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions"></a>

```csharp
private void ResetDeleteAllVersions()
```

##### `ResetDisableRead` <a name="ResetDisableRead" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead"></a>

```csharp
private void ResetDisableRead()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.resetOptions"></a>

```csharp
private void ResetOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KvSecretV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KvSecretV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KvSecretV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KvSecretV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KvSecretV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KvSecretV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KvSecretV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KvSecretV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KvSecretV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.data">Data</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.metadata">Metadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.casInput">CasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput">CustomMetadataInput</a></code> | <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput">DataJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoInput">DataJsonWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersionInput">DataJsonWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput">DeleteAllVersionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput">DisableReadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.cas">Cas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJson">DataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWo">DataJsonWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersion">DataJsonWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions">DeleteAllVersions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.disableRead">DisableRead</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata"></a>

```csharp
public KvSecretV2CustomMetadataOutputReference CustomMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a>

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.data"></a>

```csharp
public StringMap Data { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `CasInput`<sup>Optional</sup> <a name="CasInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.casInput"></a>

```csharp
public double CasInput { get; }
```

- *Type:* double

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput"></a>

```csharp
public KvSecretV2CustomMetadata CustomMetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---

##### `DataJsonInput`<sup>Optional</sup> <a name="DataJsonInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput"></a>

```csharp
public string DataJsonInput { get; }
```

- *Type:* string

---

##### `DataJsonWoInput`<sup>Optional</sup> <a name="DataJsonWoInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoInput"></a>

```csharp
public string DataJsonWoInput { get; }
```

- *Type:* string

---

##### `DataJsonWoVersionInput`<sup>Optional</sup> <a name="DataJsonWoVersionInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersionInput"></a>

```csharp
public double DataJsonWoVersionInput { get; }
```

- *Type:* double

---

##### `DeleteAllVersionsInput`<sup>Optional</sup> <a name="DeleteAllVersionsInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput"></a>

```csharp
public bool|IResolvable DeleteAllVersionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableReadInput`<sup>Optional</sup> <a name="DisableReadInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput"></a>

```csharp
public bool|IResolvable DisableReadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Cas`<sup>Required</sup> <a name="Cas" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.cas"></a>

```csharp
public double Cas { get; }
```

- *Type:* double

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJson"></a>

```csharp
public string DataJson { get; }
```

- *Type:* string

---

##### `DataJsonWo`<sup>Required</sup> <a name="DataJsonWo" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWo"></a>

```csharp
public string DataJsonWo { get; }
```

- *Type:* string

---

##### `DataJsonWoVersion`<sup>Required</sup> <a name="DataJsonWoVersion" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersion"></a>

```csharp
public double DataJsonWoVersion { get; }
```

- *Type:* double

---

##### `DeleteAllVersions`<sup>Required</sup> <a name="DeleteAllVersions" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions"></a>

```csharp
public bool|IResolvable DeleteAllVersions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableRead`<sup>Required</sup> <a name="DisableRead" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.disableRead"></a>

```csharp
public bool|IResolvable DisableRead { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KvSecretV2Config <a name="KvSecretV2Config" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KvSecretV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Name,
    double Cas = null,
    KvSecretV2CustomMetadata CustomMetadata = null,
    string DataJson = null,
    string DataJsonWo = null,
    double DataJsonWoVersion = null,
    bool|IResolvable DeleteAllVersions = null,
    bool|IResolvable DisableRead = null,
    string Id = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.mount">Mount</a></code> | <code>string</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.name">Name</a></code> | <code>string</code> | Full name of the secret. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.cas">Cas</a></code> | <code>double</code> | This flag is required if cas_required is set to true on either the secret or the engine's config. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata">CustomMetadata</a></code> | <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | custom_metadata block. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson">DataJson</a></code> | <code>string</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWo">DataJsonWo</a></code> | <code>string</code> | Write-Only JSON-encoded secret data to write. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWoVersion">DataJsonWoVersion</a></code> | <code>double</code> | Version counter for write-only secret data. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions">DeleteAllVersions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead">DisableRead</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables reading secret from Vault; note: drift won't be detected. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#id KvSecretV2#id}. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An object that holds option settings. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#mount KvSecretV2#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#name KvSecretV2#name}

---

##### `Cas`<sup>Optional</sup> <a name="Cas" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.cas"></a>

```csharp
public double Cas { get; set; }
```

- *Type:* double

This flag is required if cas_required is set to true on either the secret or the engine's config.

In order for a write to be successful, cas must be set to the current version of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#cas KvSecretV2#cas}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata"></a>

```csharp
public KvSecretV2CustomMetadata CustomMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

custom_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#custom_metadata KvSecretV2#custom_metadata}

---

##### `DataJson`<sup>Optional</sup> <a name="DataJson" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson"></a>

```csharp
public string DataJson { get; set; }
```

- *Type:* string

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#data_json KvSecretV2#data_json}

---

##### `DataJsonWo`<sup>Optional</sup> <a name="DataJsonWo" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWo"></a>

```csharp
public string DataJsonWo { get; set; }
```

- *Type:* string

Write-Only JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#data_json_wo KvSecretV2#data_json_wo}

---

##### `DataJsonWoVersion`<sup>Optional</sup> <a name="DataJsonWoVersion" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWoVersion"></a>

```csharp
public double DataJsonWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#data_json_wo_version KvSecretV2#data_json_wo_version}

---

##### `DeleteAllVersions`<sup>Optional</sup> <a name="DeleteAllVersions" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions"></a>

```csharp
public bool|IResolvable DeleteAllVersions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}

---

##### `DisableRead`<sup>Optional</sup> <a name="DisableRead" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead"></a>

```csharp
public bool|IResolvable DisableRead { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables reading secret from Vault; note: drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#disable_read KvSecretV2#disable_read}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#id KvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#namespace KvSecretV2#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2Config.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An object that holds option settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#options KvSecretV2#options}

---

### KvSecretV2CustomMetadata <a name="KvSecretV2CustomMetadata" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KvSecretV2CustomMetadata {
    bool|IResolvable CasRequired = null,
    System.Collections.Generic.IDictionary<string, string> Data = null,
    double DeleteVersionAfter = null,
    double MaxVersions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired">CasRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of arbitrary string to string valued user-provided metadata meant to describe the secret. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter">DeleteVersionAfter</a></code> | <code>double</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions">MaxVersions</a></code> | <code>double</code> | The number of versions to keep per key. |

---

##### `CasRequired`<sup>Optional</sup> <a name="CasRequired" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired"></a>

```csharp
public bool|IResolvable CasRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#cas_required KvSecretV2#cas_required}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of arbitrary string to string valued user-provided metadata meant to describe the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#data KvSecretV2#data}

---

##### `DeleteVersionAfter`<sup>Optional</sup> <a name="DeleteVersionAfter" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter"></a>

```csharp
public double DeleteVersionAfter { get; set; }
```

- *Type:* double

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#delete_version_after KvSecretV2#delete_version_after}

---

##### `MaxVersions`<sup>Optional</sup> <a name="MaxVersions" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions"></a>

```csharp
public double MaxVersions { get; set; }
```

- *Type:* double

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kv_secret_v2#max_versions KvSecretV2#max_versions}

---

## Classes <a name="Classes" id="Classes"></a>

### KvSecretV2CustomMetadataOutputReference <a name="KvSecretV2CustomMetadataOutputReference" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KvSecretV2CustomMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired">ResetCasRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter">ResetDeleteVersionAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions">ResetMaxVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCasRequired` <a name="ResetCasRequired" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired"></a>

```csharp
private void ResetCasRequired()
```

##### `ResetData` <a name="ResetData" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetDeleteVersionAfter` <a name="ResetDeleteVersionAfter" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter"></a>

```csharp
private void ResetDeleteVersionAfter()
```

##### `ResetMaxVersions` <a name="ResetMaxVersions" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions"></a>

```csharp
private void ResetMaxVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput">CasRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput">DataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput">DeleteVersionAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput">MaxVersionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired">CasRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data">Data</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter">DeleteVersionAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions">MaxVersions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CasRequiredInput`<sup>Optional</sup> <a name="CasRequiredInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput"></a>

```csharp
public bool|IResolvable CasRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteVersionAfterInput`<sup>Optional</sup> <a name="DeleteVersionAfterInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput"></a>

```csharp
public double DeleteVersionAfterInput { get; }
```

- *Type:* double

---

##### `MaxVersionsInput`<sup>Optional</sup> <a name="MaxVersionsInput" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput"></a>

```csharp
public double MaxVersionsInput { get; }
```

- *Type:* double

---

##### `CasRequired`<sup>Required</sup> <a name="CasRequired" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired"></a>

```csharp
public bool|IResolvable CasRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Data { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeleteVersionAfter`<sup>Required</sup> <a name="DeleteVersionAfter" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter"></a>

```csharp
public double DeleteVersionAfter { get; }
```

- *Type:* double

---

##### `MaxVersions`<sup>Required</sup> <a name="MaxVersions" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions"></a>

```csharp
public double MaxVersions { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue"></a>

```csharp
public KvSecretV2CustomMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---



