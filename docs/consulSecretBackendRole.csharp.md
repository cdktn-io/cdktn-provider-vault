# `consulSecretBackendRole` Submodule <a name="`consulSecretBackendRole` Submodule" id="@cdktn/provider-vault.consulSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulSecretBackendRole <a name="ConsulSecretBackendRole" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role vault_consul_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ConsulSecretBackendRole(Construct Scope, string Id, ConsulSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig">ConsulSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig">ConsulSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulNamespace">ResetConsulNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulPolicies">ResetConsulPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulRoles">ResetConsulRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNodeIdentities">ResetNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetServiceIdentities">ResetServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetConsulNamespace` <a name="ResetConsulNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulNamespace"></a>

```csharp
private void ResetConsulNamespace()
```

##### `ResetConsulPolicies` <a name="ResetConsulPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulPolicies"></a>

```csharp
private void ResetConsulPolicies()
```

##### `ResetConsulRoles` <a name="ResetConsulRoles" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulRoles"></a>

```csharp
private void ResetConsulRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNodeIdentities` <a name="ResetNodeIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNodeIdentities"></a>

```csharp
private void ResetNodeIdentities()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetServiceIdentities` <a name="ResetServiceIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetServiceIdentities"></a>

```csharp
private void ResetServiceIdentities()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConsulSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConsulSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConsulSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConsulSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

ConsulSecretBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConsulSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConsulSecretBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConsulSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConsulSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespaceInput">ConsulNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPoliciesInput">ConsulPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRolesInput">ConsulRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.localInput">LocalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentitiesInput">NodeIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentitiesInput">ServiceIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespace">ConsulNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPolicies">ConsulPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRoles">ConsulRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentities">NodeIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentities">ServiceIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `ConsulNamespaceInput`<sup>Optional</sup> <a name="ConsulNamespaceInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespaceInput"></a>

```csharp
public string ConsulNamespaceInput { get; }
```

- *Type:* string

---

##### `ConsulPoliciesInput`<sup>Optional</sup> <a name="ConsulPoliciesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPoliciesInput"></a>

```csharp
public string[] ConsulPoliciesInput { get; }
```

- *Type:* string[]

---

##### `ConsulRolesInput`<sup>Optional</sup> <a name="ConsulRolesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRolesInput"></a>

```csharp
public string[] ConsulRolesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NodeIdentitiesInput`<sup>Optional</sup> <a name="NodeIdentitiesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentitiesInput"></a>

```csharp
public string[] NodeIdentitiesInput { get; }
```

- *Type:* string[]

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `ServiceIdentitiesInput`<sup>Optional</sup> <a name="ServiceIdentitiesInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentitiesInput"></a>

```csharp
public string[] ServiceIdentitiesInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `ConsulNamespace`<sup>Required</sup> <a name="ConsulNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespace"></a>

```csharp
public string ConsulNamespace { get; }
```

- *Type:* string

---

##### `ConsulPolicies`<sup>Required</sup> <a name="ConsulPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPolicies"></a>

```csharp
public string[] ConsulPolicies { get; }
```

- *Type:* string[]

---

##### `ConsulRoles`<sup>Required</sup> <a name="ConsulRoles" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRoles"></a>

```csharp
public string[] ConsulRoles { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NodeIdentities`<sup>Required</sup> <a name="NodeIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentities"></a>

```csharp
public string[] NodeIdentities { get; }
```

- *Type:* string[]

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `ServiceIdentities`<sup>Required</sup> <a name="ServiceIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentities"></a>

```csharp
public string[] ServiceIdentities { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulSecretBackendRoleConfig <a name="ConsulSecretBackendRoleConfig" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new ConsulSecretBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Backend = null,
    string ConsulNamespace = null,
    string[] ConsulPolicies = null,
    string[] ConsulRoles = null,
    string Id = null,
    bool|IResolvable Local = null,
    double MaxTtl = null,
    string Namespace = null,
    string[] NodeIdentities = null,
    string Partition = null,
    string[] Policies = null,
    string[] ServiceIdentities = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | The name of an existing role against which to create this Consul credential. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | The path of the Consul Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulNamespace">ConsulNamespace</a></code> | <code>string</code> | The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulPolicies">ConsulPolicies</a></code> | <code>string[]</code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulRoles">ConsulRoles</a></code> | <code>string[]</code> | Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that the token should not be replicated globally and instead be local to the current datacenter. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.nodeIdentities">NodeIdentities</a></code> | <code>string[]</code> | Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.partition">Partition</a></code> | <code>string</code> | The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.policies">Policies</a></code> | <code>string[]</code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.serviceIdentities">ServiceIdentities</a></code> | <code>string[]</code> | Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+. |
| <code><a href="#@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>double</code> | Specifies the TTL for this role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of an existing role against which to create this Consul credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#name ConsulSecretBackendRole#name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The path of the Consul Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#backend ConsulSecretBackendRole#backend}

---

##### `ConsulNamespace`<sup>Optional</sup> <a name="ConsulNamespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulNamespace"></a>

```csharp
public string ConsulNamespace { get; set; }
```

- *Type:* string

The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#consul_namespace ConsulSecretBackendRole#consul_namespace}

---

##### `ConsulPolicies`<sup>Optional</sup> <a name="ConsulPolicies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulPolicies"></a>

```csharp
public string[] ConsulPolicies { get; set; }
```

- *Type:* string[]

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#consul_policies ConsulSecretBackendRole#consul_policies}

---

##### `ConsulRoles`<sup>Optional</sup> <a name="ConsulRoles" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulRoles"></a>

```csharp
public string[] ConsulRoles { get; set; }
```

- *Type:* string[]

Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#consul_roles ConsulSecretBackendRole#consul_roles}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that the token should not be replicated globally and instead be local to the current datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#local ConsulSecretBackendRole#local}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#max_ttl ConsulSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#namespace ConsulSecretBackendRole#namespace}

---

##### `NodeIdentities`<sup>Optional</sup> <a name="NodeIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.nodeIdentities"></a>

```csharp
public string[] NodeIdentities { get; set; }
```

- *Type:* string[]

Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#node_identities ConsulSecretBackendRole#node_identities}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#partition ConsulSecretBackendRole#partition}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#policies ConsulSecretBackendRole#policies}

---

##### `ServiceIdentities`<sup>Optional</sup> <a name="ServiceIdentities" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.serviceIdentities"></a>

```csharp
public string[] ServiceIdentities { get; set; }
```

- *Type:* string[]

Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#service_identities ConsulSecretBackendRole#service_identities}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Specifies the TTL for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/consul_secret_backend_role#ttl ConsulSecretBackendRole#ttl}

---



