# `transformTransformationTokenizationStore` Submodule <a name="`transformTransformationTokenizationStore` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationStore <a name="TransformTransformationTokenizationStore" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store vault_transform_transformation_tokenization_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationTokenizationStore(Construct Scope, string Id, TransformTransformationTokenizationStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig">TransformTransformationTokenizationStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig">TransformTransformationTokenizationStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime">ResetMaxConnectionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections">ResetMaxIdleConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections">ResetMaxOpenConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations">ResetSupportedTransformations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxConnectionLifetime` <a name="ResetMaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxConnectionLifetime"></a>

```csharp
private void ResetMaxConnectionLifetime()
```

##### `ResetMaxIdleConnections` <a name="ResetMaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxIdleConnections"></a>

```csharp
private void ResetMaxIdleConnections()
```

##### `ResetMaxOpenConnections` <a name="ResetMaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetMaxOpenConnections"></a>

```csharp
private void ResetMaxOpenConnections()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSupportedTransformations` <a name="ResetSupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.resetSupportedTransformations"></a>

```csharp
private void ResetSupportedTransformations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenizationStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformationTokenizationStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformationTokenizationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput">DriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput">MaxConnectionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput">MaxIdleConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput">MaxOpenConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput">SupportedTransformationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver">Driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations">SupportedTransformations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driverInput"></a>

```csharp
public string DriverInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxConnectionLifetimeInput`<sup>Optional</sup> <a name="MaxConnectionLifetimeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetimeInput"></a>

```csharp
public double MaxConnectionLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxIdleConnectionsInput`<sup>Optional</sup> <a name="MaxIdleConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnectionsInput"></a>

```csharp
public double MaxIdleConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxOpenConnectionsInput`<sup>Optional</sup> <a name="MaxOpenConnectionsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnectionsInput"></a>

```csharp
public double MaxOpenConnectionsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SupportedTransformationsInput`<sup>Optional</sup> <a name="SupportedTransformationsInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformationsInput"></a>

```csharp
public string[] SupportedTransformationsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.driver"></a>

```csharp
public string Driver { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxConnectionLifetime`<sup>Required</sup> <a name="MaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; }
```

- *Type:* double

---

##### `MaxIdleConnections`<sup>Required</sup> <a name="MaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; }
```

- *Type:* double

---

##### `MaxOpenConnections`<sup>Required</sup> <a name="MaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SupportedTransformations`<sup>Required</sup> <a name="SupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.supportedTransformations"></a>

```csharp
public string[] SupportedTransformations { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationStoreConfig <a name="TransformTransformationTokenizationStoreConfig" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationTokenizationStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConnectionString,
    string Driver,
    string Name,
    string Password,
    string Path,
    string Type,
    string Username,
    string Id = null,
    double MaxConnectionLifetime = null,
    double MaxIdleConnections = null,
    double MaxOpenConnections = null,
    string Namespace = null,
    string Schema = null,
    string[] SupportedTransformations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver">Driver</a></code> | <code>string</code> | Specifies the database driver to use, and thus which SQL database type. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name">Name</a></code> | <code>string</code> | The name of the store. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password">Password</a></code> | <code>string</code> | Password value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path">Path</a></code> | <code>string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type">Type</a></code> | <code>string</code> | Specifies the type of store, currently only "sql" is supported,. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username">Username</a></code> | <code>string</code> | Username value to use to connect to database. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime">MaxConnectionLifetime</a></code> | <code>double</code> | The maximum amount of time a connection can be open before closing it. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections">MaxIdleConnections</a></code> | <code>double</code> | The maximum number of idle connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections">MaxOpenConnections</a></code> | <code>double</code> | The maximum number of connections to the database at any given time. Default is 4. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema">Schema</a></code> | <code>string</code> | The schema within the database to expect tokenization state tables. Default is "public". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations">SupportedTransformations</a></code> | <code>string[]</code> | The types of transformations this store can support, currently only "tokenization" is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

A database connection string with template slots for username and password that Vault will use for locating and connecting to a database.

Each database driver type has a different syntax for its connection strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.driver"></a>

```csharp
public string Driver { get; set; }
```

- *Type:* string

Specifies the database driver to use, and thus which SQL database type.

Currently the supported options are postgres, mysql, and mssql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of store, currently only "sql" is supported,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username value to use to connect to database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxConnectionLifetime`<sup>Optional</sup> <a name="MaxConnectionLifetime" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxConnectionLifetime"></a>

```csharp
public double MaxConnectionLifetime { get; set; }
```

- *Type:* double

The maximum amount of time a connection can be open before closing it.

0 means no limit. Default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}

---

##### `MaxIdleConnections`<sup>Optional</sup> <a name="MaxIdleConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxIdleConnections"></a>

```csharp
public double MaxIdleConnections { get; set; }
```

- *Type:* double

The maximum number of idle connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}

---

##### `MaxOpenConnections`<sup>Optional</sup> <a name="MaxOpenConnections" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.maxOpenConnections"></a>

```csharp
public double MaxOpenConnections { get; set; }
```

- *Type:* double

The maximum number of connections to the database at any given time. Default is 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema within the database to expect tokenization state tables. Default is "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}

---

##### `SupportedTransformations`<sup>Optional</sup> <a name="SupportedTransformations" id="@cdktn/provider-vault.transformTransformationTokenizationStore.TransformTransformationTokenizationStoreConfig.property.supportedTransformations"></a>

```csharp
public string[] SupportedTransformations { get; set; }
```

- *Type:* string[]

The types of transformations this store can support, currently only "tokenization" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}

---



